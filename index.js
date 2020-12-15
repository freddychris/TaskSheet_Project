// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
  })
  const db = require('./models');
  const timesheetRoutes = require('./routes/timesheet.routes');
  fastify.register(timesheetRoutes, { prefix: '/v1' });
  // Declare a route
  fastify.get('/', function (request, reply) {
    reply.send( "WELCOME TO TIMESHEET" )
  })
  
  // Run the server!
  fastify.listen(3000, async function(err, address) {
    await db.sequelize.authenticate();
  
  
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })
  