const mongoose = require("mongoose");
const Post = require("./post"); // we have to make sure our Book schema is aware of the Base schema
const extendSchema = require("mongoose-extend-schema");
const postOptions = {
  discriminatorKey: "postType",
};

const Job = Post.discriminator(
  "job",
  extendSchema(Post, {
    title: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number },
    jobType: { type: String, required: true },
    skills: Array,
    nbEmployees: { type: Number },
    devis: { type: String },
  }),
  postOptions
);

/*
const JobSchema = extendSchema(Post, {
  title: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number },
  jobType: { type: String, required: true },
});

//const Problem = mongoose.model("Problem", ProblemSchema);
const JobType = Post.discriminator("job", JobSchema);*/
//const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
