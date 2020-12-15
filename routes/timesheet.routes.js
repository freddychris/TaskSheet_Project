const timesheetController = require('../controllers/timesheet.controllers.js');



function timesheets(fastify, opts, next) {
    fastify.post('/timesheets', timesheetController.create);
    fastify.get('/timesheets', timesheetController.list);
    fastify.get('/timesheets/:timesheets_id', timesheetController.view);
    fastify.put('/timesheets/:timesheets_id/update', timesheetController.update);
    fastify.delete('/timesheets/:timesheets_id/destroy', timesheetController.destroy );
   next()
}


module.exports = timesheets;