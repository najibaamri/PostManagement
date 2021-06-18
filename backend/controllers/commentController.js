const Comment = require("../models/comment");

const commentController = {};

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  sorting() {
    this.query = this.query.sort("-createdAt");
    return this;
  }
  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 5;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

commentController.get = async (req, res, next) => {
  try {
    const features = new APIfeatures(
      Comment.find({ post_id: req.params.post_id }).populate("username"),
      req.query
    )
      .sorting()
      .paginating();
    const comments = await features.query;
    return res.send({
      status: "success",
      result: comments.length,
      comments,
    });
  } catch (error) {
    next(error);
  }
};

commentController.getNbComments = async (req, res, next) => {
  try {
    const nbcomments = await Comment.find({ post_id: req.params.post_id }).count();
    return res.send({ nbcomments });
  } catch (error) {
    next(error);
  }
};

commentController.create = async (req, res, next) => {
  const { description, post_id, reply } = req.body;

  const newComment = new Comment({
    description,
    post_id,
    reply,
  });
  try {
    const saved = await newComment.save();
    return res.send({
      success: true,
      comment: saved,
    });
  } catch (error) {
    next(error);
  }
};
commentController.getTopContributors = async (req, res, next) => {
  try {
    const topusers = await Comment.aggregate([
      {
        $group: {
          _id: "$username",

          count: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
      {
        $limit: 6,
      },
    ]);

    //const nbcomments = await Comment.find({ post_id: req.params.post_id }).count();
    return res.send({ topusers });
  } catch (error) {
    next(error);
  }
};

module.exports = commentController;
