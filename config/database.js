// config/database.js
/* in server.js we say require(config/database)
This doesn't mean that we can use the variables here,
so we export them
*/
module.exports = {
	url: 'mongodb://localhost/'
}