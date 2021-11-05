const Post = require("../model/Post.js");

//Getting all posts
exports.getAllPosts = async(req, res) => {
    const posts = await Post.find({}).sort("-dateCreated");
    res.render("index", { posts });
};

//Creating post
exports.createPost = async(req, res) => {
    await Post.create({...req.body });
    res.redirect("/");
};

//Finding post by id
exports.getPost = async(req, res) => {
    const post = await Post.findById(req.params.id);
    res.render("post", { post });
};

//Updating existed post
exports.updatePost = async(req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    post.title = req.body.title;
    post.message = req.body.message;
    post.save();
    res.redirect(`/posts/${req.params.id}`);
};

//Deleting post
exports.deletePost = async(req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.redirect("/");
}