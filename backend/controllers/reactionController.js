const reactionController = {};
const Reaction = require("../models/reaction");

reactionController.create = async (req, res, next) => {
  const { name, image, post_id, username } = req.body;

  const newReaction = new Reaction({
    name,
    image,
    post_id,
    username,
  });
  try {
    const exist = await Reaction.findOne({ post_id: post_id, username: username });
    if (exist === null) {
      const saved = await newReaction.save();
      return res.send({
        success: true,
        reaction: saved,
      });
    } else {
      return res.send({
        success: false,
        msg: "user has already react to this post",
      });
    }
  } catch (error) {
    next(error);
  }
};

reactionController.get = async (req, res, next) => {
  const postid = req.params.postid;
  try {
    const result = await Reaction.find({ post_id: postid });
    return res.send({ result });
  } catch (error) {
    next(error);
  }
};
reactionController.getnbReacts = async (req, res, next) => {
  const postid = req.params.postid;
  try {
    const result = await Reaction.find({ post_id: postid }).countDocuments();
    return res.send({ result });
  } catch (error) {
    next(error);
  }
};

reactionController.delete = async (req, res, next) => {
  const react_id = req.params.react_id;
  const username = req.params.username;
  try {
    await Reaction.deleteOne({ _id: react_id, username: username });
    res.send({ success: true });
  } catch (error) {
    next(error);
  }
};

reactionController.deleteReactByUserAndPost = async (req, res, next) => {
  const postid = req.params.postid;
  const username = req.params.username;
  try {
    await Reaction.findOneAndDelete({ post_id: postid, username: username });
    return res.send({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = reactionController;
