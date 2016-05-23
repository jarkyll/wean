// app/models/todo.js


//load mongoose b/c it is used to define models

var mongoose = require("mongoose")

module.exports = mongoose.model('Todo', {
	text: String,
	done: Boolean
})