const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReactionSchema = Schema(
  {
    name: { type: String },
    image: { type: String },
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    vote: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Reaction = mongoose.model("Reaction", ReactionSchema);
module.exports = Reaction;
