const express = require("express");
const postCatrouter = express.Router();

const categoryPostController = require("../controllers/categoryPostController");

postCatrouter.post("/categoryP", categoryPostController.create);
postCatrouter.get("/categoryP", categoryPostController.get);
postCatrouter.delete("/categoryP/:categoryPost_id", categoryPostController.delete);
postCatrouter.put("/categoryP/:categoryPost_id", categoryPostController.update);
postCatrouter.get("/categorypbyid/:categoryid", categoryPostController.getById);

module.exports = postCatrouter;
