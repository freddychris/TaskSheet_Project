const renderError = require('./lib/renderError');
const fastify = require('fastify')({
  logger: true
})
const db = require('./models');
const timesheetRoutes = require('./routes/timesheet.routes');

fastify.register(timesheetRoutes, { prefix: '/v1' });
fastify.get('/', function (request, reply) {
  reply.send("WELCOME TO TIMESHEET")
})

fastify.listen(3000, async function (err, address) {
  await db.sequelize.authenticate();
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})

fastify.setErrorHandler((error, req, reply) => {
  renderError(reply, error);
});
