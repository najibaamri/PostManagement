const mongoose = require("mongoose");
const { Schema } = mongoose;
const extendSchema = require("mongoose-extend-schema");
const User = require("./User");

const postOptions = {
  discriminatorKey: "postType",
  timestamps: true,
};

const PostSchema = Schema(
  {
    description: { type: String },

    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    image: { type: String },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryPost",
    },
  },

  postOptions
);

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;

/*const ProblemSchema = extendSchema(
  PostSchema,
  {
    title: { type: String, required: true },
  },
  postOptions
);*/
