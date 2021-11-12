const express = require('express');
const router = express.Router();
const pageController = require('../controllers/courseController');

router.route('/').post(courseController.createCourse);
router.route('/').get(courseController.getAllCourses);

module.exports = router