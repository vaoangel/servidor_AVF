// Require the fastify framework and instantiate it
const fastify = require('fastify')({
	logger: true
})

// Require external modules
/* const mongoose = require('mongoose')

// Connect to DB
mongoose
		 //.connect('mongodb://localhost/general')
		   .connect('mongodb://mongo/general')

	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err)) */

module.exports = fastify

