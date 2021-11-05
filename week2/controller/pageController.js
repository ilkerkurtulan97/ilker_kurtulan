const Post = require("../model/Post");

//Opening about page
exports.getAboutPage = async(req, res) => {
    res.render("about");
};

//Opening add post page
exports.getAddPostPage = async(req, res) => {
    res.render("add_post");
};

//Opening edit page
exports.getEditPage = async(req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    res.render("edit_post", { post });
};