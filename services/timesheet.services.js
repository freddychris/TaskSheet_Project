const { Timesheet } = require('../models');
const { name, work_from } = require('../config/constant');
const { size, map, split } = require('lodash');
const { paginate } = require('../lib/paginatorResult');
const { globalSearchQuery } = require('../queries/timesheetGlobalSearch.query');
//const timesheets = require('../models/timesheets');

const Q_MINIMUM_SIZE = 3;


function create(attributes) {
    return Timesheet.create(attributes)
}


function list(query) {
    const { q } = query;
    const page = query.page > 0 ? parseInt(query.page) : 1;
    const perPage = query.perPage > 0 ? parseInt(query.perPage) : 10;
    const offset = (page - 1) * perPage;
    const limit = perPage;

    const queries = size(q) >= Q_MINIMUM_SIZE ? globalSearchQuery(query) : {};
    //const columnQuery = columnSearchQuery(query);
    //const orders = orderColumnQuery(query);
  

    return Timesheet.findAndCountAll({
       where: queries,
        //order: orders,
        limit,
        offset
      }).then((timesheets) => {
        console.log("RESULT 1 ==>", timesheets);
        const result = paginate(timesheets, perPage, page);
        return result;
      });
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

module.exports = { create, list, view, update, destroy };