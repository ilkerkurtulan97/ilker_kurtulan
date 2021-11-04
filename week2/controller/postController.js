const Post = require("../model/Post.js");

exports.getAllPosts = async(req, res) => {
    const posts = await Post.find({}).sort("-dateCreated");
    res.render("index", { posts });
};

exports.createPost = async(req, res) => {
    await Post.create({...req.body });
    res.redirect("/");
};

exports.getPost = async(req, res) => {
    const post = await Post.findById(req.params.id);
    res.render("post", { post });
};

exports.updatePost = async(req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    post.title = req.body.title;
    post.message = req.body.message;
    post.save();
    res.redirect(`/posts/:${req.params.id}`);
};

exports.deletePost = async(req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.redirect("/");
}