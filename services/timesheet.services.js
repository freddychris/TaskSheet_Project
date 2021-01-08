const { Timesheet } = require('../models');
const { name, work_from } = require('../config/constant');
const { size } = require('lodash');
const { paginate } = require('../lib/paginatorResult');
const { globalSearchQuery } = require('../queries/timesheetGlobalSearch.query');
const { EmptyResultError } = require('sequelize');
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

    return Timesheet.findAndCountAll({
        where: queries,
        limit,
        offset
    }).then((timesheets) => {
        const result = paginate(timesheets, perPage, page);
        return result;
    });
}

function view(id) {
    return Timesheet.findOne({
        where: {
            id: id
        }
    }).then((timesheet) => {
        if (timesheet) {
            return timesheet;
        }
        throw new EmptyResultError('No record found');
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