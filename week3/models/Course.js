const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    slug: { type: String, unique: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;