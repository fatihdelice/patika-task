const Mongoose = require("mongoose");

const todoSchema = new Mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    createdAt: Date,
});

module.exports = {
    TodoModel: Mongoose.model("todo", todoSchema),
};