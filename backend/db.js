
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://yashuradecomp23:NYFRMlLAGvwNARWd@cluster0.v6plb.mongodb.net/TODO")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
};