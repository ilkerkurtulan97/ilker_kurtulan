const express = require('express');
const router = express.Router();
const courseController = require('../controllers/categoryController');


router.route('/').post(categoryController.createCategory);

module.exports = router