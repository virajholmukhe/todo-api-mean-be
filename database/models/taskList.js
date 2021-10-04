const mongoose = require('mongoose');

const TaskListSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 3,
        trim: true,
    }
})

const TaskList = mongoose.model('TaskList', TaskListSchema);

module.exports = TaskList