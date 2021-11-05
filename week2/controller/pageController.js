const Post = require("../model/Post");

exports.getAboutPage = async(req, res) => {
    res.render("about");
};

exports.getAddPostPage = async(req, res) => {
    res.render("add_post");
};

exports.getEditPage = async(req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    res.render("edit_post", { post });
};