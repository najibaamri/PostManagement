const express = require("express");
const comrouter = express.Router();

const commentController = require("../controllers/commentController");

comrouter.get("/comment/:post_id", commentController.get);
comrouter.get("/nbcomment/:post_id", commentController.getNbComments);
comrouter.post("/comment", commentController.create);
comrouter.get("/topContributors", commentController.getTopContributors);

module.exports = comrouter;
