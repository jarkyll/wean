// app/routes.js



//load the Todo Model
var Todo = require("./models/todo")

// export the routes
/* routing accepts a single argument called app,
When this is called, we need to pass instance of Express app */
module.exports = function(app){
	//api
	app.get('/api/todos', function(req, res){
		//mongoose used to get all todos.
		Todo.find(function(err, todos){
			if(err)
				res.send(err)
			res.json(todos); // return all todo's in json
		})
	})


	app.post('/api/todos', function(req, res){
		// information comes from ajax request using angular
		Todo.create({
			text: req.body.text,
			done: false
		}, function(err, todos){
			if(err)
				res.send(err)
			//get and return the todos after posting basically get call 
			Todo.find(function(err, todo){
				if(err)
					res.send(err)
				res.json(todo)
			})
		})
	})

	app.delete('/api/todos/:todo_id', function(req, res){
		Todo.remove({
			_id: req.params.todo_id },
			 function(err, todo){
				if(err)
					res.send(err)
				// success in deleting
				Todo.find(function(err, todos){
					if(err)
						res.send(err)
					res.send(todos)

				})
			})
	})
}