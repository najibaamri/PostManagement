const express = require("express");
const postrouter = express.Router();
const multer = require("multer");
const parser = require("../restApi/cloudinary");

const postController = require("../controllers/postController");
const problemController = require("../controllers/problemController");
const jobController = require("../controllers/jobController");

// Multer Configurations
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, file.originalname);
  },
});

const upload = multer({ storage, limits: { fileSize: 1000000000000000000000 } }).single("image");

// Post Routes
postrouter.post("/post", parser.single("image"), postController.create);
postrouter.get("/post", postController.get);
postrouter.delete("/post/:post_id", postController.delete);
postrouter.put("/post/:post_id", postController.update);
postrouter.get("/post/:post_id", postController.getById);

// Problem Routes
postrouter.post("/problem", problemController.create);
postrouter.get("/problem", problemController.get);
postrouter.delete("/problem/:problem_id", problemController.delete);
postrouter.put("/problem/:problem_id", problemController.update);
postrouter.get("/problem/:cat_id", problemController.getNbProblemsByCat);
postrouter.get("/problemdetail/:problem_id", problemController.getById);
postrouter.get("/problemsbyuser/:username", problemController.getByUser);
postrouter.get("/nbproblems", problemController.countByCat);

//Job Routes
postrouter.post("/job", jobController.create);
postrouter.get("/job", jobController.get);
postrouter.delete("/job/:job_id", jobController.delete);
postrouter.put("/job/:job_id", jobController.update);
postrouter.get("/job/:cat_id", jobController.getNbJobsByCat);
postrouter.get("/jobdetail/:job_id", jobController.getJobById);
postrouter.get("/jobuser/:username", jobController.getJobsByUser);
postrouter.get("/searchjobs", jobController.searchJobs);
postrouter.get("/nbjob", jobController.countByCat);

module.exports = postrouter;
