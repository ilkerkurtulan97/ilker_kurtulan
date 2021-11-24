const Category = require('../models/Category');

exports.createCourse = async(req, res) => {
    const category = await Category.create(req.body);

    res.status(201).json({category: category});
}