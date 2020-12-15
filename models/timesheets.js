'use strict'
module.exports = (sequelize, DataTypes) => {
    const Timesheet = sequelize.define('Timesheet',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.BIGINT
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            work_from: {
                allowNull: false,
                type: DataTypes.STRING
            },
            choose_project: {
                allowNull: false,
                type: DataTypes.STRING
            },
            choose_project_phase: {
                allowNull: false,
                type: DataTypes.STRING
            },
            task_worked_on: {
                allowNull: false,
                type: DataTypes.STRING
            },
            number_of_hours: {
                allowNull: false,
                type: DataTypes.STRING
            },
            any_comments: {
                allowNull: false,
                type: DataTypes.STRING
            }
        }, {
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    return Timesheet;
}