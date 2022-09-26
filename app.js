// Import Server
const fastify = require('./server.js')


// Import Routes
const routes = require('./routes')
var cors = require('cors');
fastify.use(cors());


	middleware = new Promise(() =>{});
	middleware.then(()=>{
		fastify.register(require('middie'))
		fastify.use(require('cors')())

	}) 
// Loop over each route
routes.forEach((route, index) => {
	fastify.route(route)
})

// Run the server!
const start = async () => {
	try {
		await fastify.listen(3050, '0.0.0.0')
		fastify.log.info(`server listening on ${fastify.server.address().port}`)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()
