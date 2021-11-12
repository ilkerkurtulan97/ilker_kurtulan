const Course = require('../models/Course');

exports.createCourse = async(req, res) => {
    const course = await Course.create(req.body);

    res.status(201).json({
        status: 'success',
        message: 'Course created',
        data: course
    });
}

exports.getAllCourses = async(req, res) => {
    const course = await Course.find({})

    res.status(201).json({
        status: 'success',
        message: 'Course created',
        data: course
    });
}