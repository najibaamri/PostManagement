const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    //minlength: 6,
    select: false,
  },
  role: {
    type: Number,
    default: 0, // 0= user , 1 admin
  },
  trainer: {
    type: String,
    default: 0, //n'est pas valider par l'admin
  },
  domain: String,
  profilePicture: {
    type: String,
    default: "https://res.cloudinary.com/sabrine/image/upload/v1616409420/images/images_y2zqeh.png",
  },
  coverPicture: {
    type: String,
    default:
      "https://res.cloudinary.com/dp2vr0kfb/image/upload/v1613503766/avatars/clerk-with-tie_btmt2q.png",
  },
  dateBirth: Date,
  numTel: Number,
  country: String,
  address: String,
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
