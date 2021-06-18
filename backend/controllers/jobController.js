const jobController = {};
const Post = require("../models/post");
const Job = require("../models/job");
const sendMail = require("./sendMail");

jobController.create = async (req, res, next) => {
  const {
    title,
    description,
    createdAt,
    image,
    location,
    salary,
    jobType,
    skills,
    nbEmployees,
    category_id,
    username,
    devis,
  } = req.body;
  const newJob = new Job({
    title,
    description,
    createdAt,
    image,
    location,
    salary,
    jobType,
    skills,
    nbEmployees,
    category_id,
    username,
    devis,
  });
  try {
    const saved = await newJob.save();

    return res.send({
      success: true,
      job: saved,
    });
  } catch (error) {
    next(error);
  }
};

jobController.get = async (req, res, next) => {
  try {
    const jobs = await Job.find().populate("username").sort({
      createdAt: -1,
    });

    return res.send({ jobs });
  } catch (error) {
    next(error);
  }
};

jobController.delete = async (req, res, next) => {
  const job_id = req.params.job_id;
  try {
    const job = await Job.findOne({ _id: job_id }).populate("username");
    //si le job est supprimé par l'admin
    if (job.username._id !== "607e1c43b6e3422b40b74212") {
      sendMail(
        "najibaamri23@gmail.com",
        "Your job post was deleted because it contains inappropriate content which violates our website’s Terms of Use"
      );
    }
    await Job.deleteOne({ _id: job_id });
    res.send({ success: true });
  } catch (error) {
    next(error);
  }
};

jobController.update = async (req, res, next) => {
  const job_id = req.params.job_id;
  const {
    description,
    image,
    createdAt,
    title,
    location,
    salary,
    jobType,
    skills,
    nbEmployees,
  } = req.body;
  //upsert =true =>func for update and create at the same time
  try {
    const check = await Job.findOne({ _id: job_id });
    /*if (!check.owner.equals(req.user._id)) {
      const err = new Error("This expense object does not belong to you");
      err.status = 401;
      throw err;
    }*/
    const updatedDate = new Date();
    const job = await Job.update(
      { _id: job_id },
      {
        description,
        createdAt,
        image,
        title,
        location,
        salary,
        jobType,
        skills,
        nbEmployees,
      }
    );
    return res.send({
      success: true,
      job,
    });
  } catch (error) {
    next(error);
  }
};

jobController.getNbJobsByCat = async (req, res, next) => {
  const cat_id = req.params.cat_id;
  try {
    const result = await Job.find({ category_id: cat_id }).count();
    return res.send({ result });
  } catch (error) {
    next(error);
  }
};

jobController.getJobById = async (req, res, next) => {
  const job_id = req.params.job_id;
  try {
    const job = await Job.find({ _id: job_id }).populate("username");
    return res.send({ job });
  } catch (error) {
    next(error);
  }
};

jobController.getJobsByUser = async (req, res, next) => {
  const username = req.params.username;
  try {
    const jobs = await Job.find({ username: username });
    return res.send({ jobs });
  } catch (error) {
    next(error);
  }
};

jobController.searchJobs = async (req, res, next) => {
  const searchField = req.query.searchfield;
  const type = req.query.type;
  try {
    if (type === "title") {
      const jobs = await Job.find({ title: { $regex: searchField, $options: "$i" } }).sort({
        createdAt: -1,
      });
      return res.send({ jobs });
    } else if (type === "description") {
      const jobs = await Job.find({ description: { $regex: searchField, $options: "$i" } }).sort({
        createdAt: -1,
      });
      return res.send({ jobs });
    } else if (type === "location") {
      const jobs = await Job.find({ location: { $regex: searchField, $options: "$i" } }).sort({
        createdAt: -1,
      });
      return res.send({ jobs });
    } else if (type === "skills") {
      const jobs = await Job.find({ skills: { $regex: searchField, $options: "$i" } }).sort({
        createdAt: -1,
      });
      return res.send({ jobs });
    } else if (type === "salary") {
      const jobs = await Job.find({ salary: searchField }).sort({
        createdAt: -1,
      });
      return res.send({ jobs });
    } else if (type === "category") {
      const jobs = await Job.find({ category_id: searchField }).sort({
        createdAt: -1,
      });
      return res.send({ jobs });
    }
  } catch (error) {
    next(error);
  }
};

jobController.countByCat = async (req, res, next) => {
  try {
    const nbjobs = await Job.aggregate([
      {
        $group: {
          _id: "$category_id",
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    await Job.populate(nbjobs, {
      path: "_id",
      model: "CategoryPost",
    });

    return res.send({ nbjobs });
  } catch (error) {
    next(error);
  }
};

module.exports = jobController;
