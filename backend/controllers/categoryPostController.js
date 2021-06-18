const categoryPostController = {};
const CategoryPost = require("../models/CategoryPost");

categoryPostController.create = async (req, res, next) => {
  const { name } = req.body;

  const newCategory = new CategoryPost({
    name,
  });
  try {
    const saved = await newCategory.save();
    return res.send({
      success: true,
      categoryPost: saved,
    });
  } catch (error) {
    next(error);
  }
};

categoryPostController.get = async (req, res, next) => {
  try {
    const result = await CategoryPost.find();
    return res.send({ result });
  } catch (error) {
    next(error);
  }
};

categoryPostController.delete = async (req, res, next) => {
  const categoryPost_id = req.params.categoryPost_id;
  try {
    await CategoryPost.deleteOne({ _id: categoryPost_id });
    res.send({ success: true });
  } catch (error) {
    next(error);
  }
};

categoryPostController.update = async (req, res, next) => {
  const categoryPost_id = req.params.categoryPost_id;
  const { name } = req.body;
  //upsert =true =>func for update and create at the same time
  try {
    const check = await CategoryPost.findOne({ _id: categoryPost_id });
    /*if (!check.owner.equals(req.user._id)) {
      const err = new Error("This expense object does not belong to you");
      err.status = 401;
      throw err;
    }*/
    const category = await CategoryPost.update({ _id: categoryPost_id }, { name });
    return res.send({
      success: true,
      category,
    });
  } catch (error) {
    next(error);
  }
};

categoryPostController.getById = async (req, res, next) => {
  const categoryid = req.params.categoryid;
  try {
    const result = await CategoryPost.findOne({ _id: categoryid });
    return res.send({ result });
  } catch (error) {
    next(error);
  }
};

module.exports = categoryPostController;
