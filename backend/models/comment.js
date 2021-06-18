const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./User");

const CommentSchema = Schema(
  {
    description: { type: String, required: true },

    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    reply: Array,
    votes: [{ type: String, ref: "User", unique: true }],
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
