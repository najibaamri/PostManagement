/*const mongoose = require("mongoose");
const extendSchema = require("mongoose-extend-schema");
const Post = require("./post"); // we have to make sure our Book schema is aware of the Base schema
const { Schema } = mongoose;

const ProblemSchema = extendSchema(Post, {
  title: { type: String, required: true },
});

//const Problem = mongoose.model("Problem", ProblemSchema);
const Problem = Post.discriminator("Problem", ProblemSchema);
module.exports = Problem;

/*const problem = new Problem({
  description: "admin@site.com",
  image: "bla-bla-bla",
  title: "Henry",
});

problem.save();*/

const Post = require("./post");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const extendSchema = require("mongoose-extend-schema");

const postOptions = {
  discriminatorKey: "postType",
};

const Problem = Post.discriminator(
  "problem",
  extendSchema(Post, {
    title: { type: String, required: true },
  }),
  postOptions
);

//const Problem = mongoose.model("Problem", ProblemSchema);
//const ProblemType = Post.discriminator("problem", ProblemSchema);
//const Problem = mongoose.model("Problem", ProblemSchema);

module.exports = Problem;
