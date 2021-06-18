const mongoose = require("mongoose");
const { Schema } = mongoose;
const extendSchema = require("mongoose-extend-schema");

const CategoryPostSchema = Schema({
  name: { type: String },
});

const CategoryPost = mongoose.model("CategoryPost", CategoryPostSchema);
module.exports = CategoryPost;
