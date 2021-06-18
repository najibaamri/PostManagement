const express = require("express");
const reactrouter = express.Router();

const reactionController = require("../controllers/reactionController");

reactrouter.post("/react", reactionController.create);
reactrouter.get("/react/:postid", reactionController.get);
reactrouter.delete("/react/:react_id", reactionController.delete);
reactrouter.get("/nbreact/:postid", reactionController.getnbReacts);
reactrouter.delete("/reactone/:postid/:username", reactionController.deleteReactByUserAndPost);

module.exports = reactrouter;
