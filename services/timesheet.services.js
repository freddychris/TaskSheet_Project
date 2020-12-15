const { Timesheet } = require('../models');

function create(attributes) {
    return Timesheet.create(attributes)
}
function list() {
    return Timesheet.findAll()
}
function view(id) {
    return Timesheet.findOne({
        where: {
            id: id
        }
    }).then((Timesheet) => {
        return Timesheet;
    })
}
function update(id, attributes) {
    return Timesheet.update(attributes, {
        where: {
            id: id
        },
    }).then((Timesheet) => {
        return Timesheet;
    })
}
function destroy(TimesheetId) {
    return Timesheet.destroy({
        where: {
            id: TimesheetId
        }
    }).then((Timesheet) => {
        return Timesheet;
    })
}

module.exports = {create,list,view,update,destroy};