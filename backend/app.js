var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//require("dotenv").config();

// import mongoDB
var mongoose = require("mongoose");
var config = require("./database/mongodb");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const postrouter = require("./routes/postRoute");
const postCatrouter = require("./routes/categoryPostRoute");
const comrouter = require("./routes/commentRoute");
const reactrouter = require("./routes/reactRoute");
//const { Socket } = require("dgram");
const comments = require("./models/comment");

var app = express();
const cors = require("cors");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", express.static(__dirname + "/"));
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/pi/postRoute", postrouter);
app.use("/pi/catRoute", postCatrouter);
app.use("/pi/commentRoute", comrouter);
app.use("/pi/reactRoute", reactrouter);

const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// DATABASE Config
mongoose.connect(config.mongo.uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to the database");
});
mongoose.connection.on("error", (err) => {
  console.error("failed to connect to the database: ${err}");
});

//const PORT = process.env.PORT || 5000;
const PORT = 5000;
http.listen(PORT, () => {
  console.log("Server is ready for connection on port " + PORT);
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
/*app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});*/

//socket
let users = [];
io.on("connection", (socket) => {
  console.log(socket.id + "connected");

  socket.on("joinRoom", (id) => {
    const user = { userId: socket.id, room: id };

    const check = users.every((user) => user.userId != socket.id);
    if (check) {
      users.push(user);
      socket.join(user.room);
    } else {
      users.map((user) => {
        if (user.userId === socket.id) {
          if (user.room != id) {
            socket.leave(user.room);
            socket.join(id);
            user.room = id;
          }
        }
      });
    }

    console.log(users);
    console.log(socket.adapter.rooms.has(id));
  });

  socket.on("createComment", async (msg) => {
    console.log(msg);
    const { username, post_id, description, createdAt, send } = msg;
    const newComment = new comments({ username, post_id, description, createdAt });

    if (send === "replyComment") {
      const { _id, username, post_id, description, createdAt } = newComment;
      const comment = await comments.findById(post_id);

      if (comment) {
        comment.reply.push({ _id, username, description, createdAt });

        await comment.save();
        io.emit("sendReplyCommentToClient", comment);
      }
    } else {
      await newComment.save();

      io.emit("sendCommentToClient", newComment);
    }
  });
  socket.on("deleteComment", async (msg) => {
    const { _id, username, post_id, description, createdAt, reply } = msg;
    const newComment = new comments({ _id, username, post_id, description, createdAt, reply });
    const id = newComment.post_id;
    await comments.deleteOne({ _id: newComment._id });
    const comment = await comments.find({ post_id: id });
    io.emit("commentDeleted", comment);
  });
  socket.on("updateComment", async (msg) => {
    const { _id, username, post_id, description, updatedAt, reply } = msg;
    const newComment = new comments({ _id, username, post_id, description, updatedAt, reply });

    const updated = await comments.updateOne(
      { _id: newComment._id },
      { description, post_id, updatedAt, reply }
    );

    const comment = await comments.find(newComment.post_id);

    io.emit("commentUpdated", comment);
  });
  socket.on("voteComment", async (msg) => {
    const { id, username } = msg;

    const toLike = await comments.findById({ _id: id });

    console.log(toLike);
    toLike.votes.push(username);
    toLike.save();
    io.emit("commentVoted");
  });

  socket.on("unvoteComment", async (msg) => {
    const { id, username } = msg;

    const toLike = await comments.findById({ _id: id });

    console.log(toLike);
    toLike.votes.pull(username);
    toLike.save();
    io.emit("commentUnvoted");
  });

  socket.on("disconnect", () => {
    console.log(socket.id + "disconnected");
  });
});

module.exports = app;
