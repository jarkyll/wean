var express = require("express")
var app = express()
var mongoose = require("mongoose")
var morgan = require("morgan") // log requests
var bodyParser = require("body-parser") // get info from POST
var methodOverride = require("method-override") // simulate
var database = require("./config/database")
var port = process.env.PORT || 1337

//configuration
mongoose.connect(database.url)
// binding middleware
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev')) // log every request
app.use(bodyParser.urlencoded({'extended': 'true'}))// parse application/x-www-form-urlencoded
app.use(bodyParser.json())// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}))// parse vnd.api


//routing

require('./app/routes.js')(app)


//listen

app.listen(port)
console.log("App is listening on port: " + port)


