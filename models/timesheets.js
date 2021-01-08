'use strict'
const { name, choose_project, choose_project_phase } = require('../config/constant');

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
                type: DataTypes.STRING,
                allowNull: { args: false, msg: 'Enter the Name' },
                unique: { args: true, msg: 'Name should be unique' },
                validate: {
                    isAlpha: {
                        args: true,
                        msg: 'Name should be Alphabet'
                    },
                    isName(value, next) {
                        if (name.includes(value)) {
                            return next();
                        } else {
                            return next('Invalid User Name');
                        }
                    }
                }
            },
            work_from: {
                allowNull: { args: false, msg: 'Please enter the work From details' },
                type: DataTypes.ENUM({
                    values: ['Office', 'Home', 'Leave']
                })
            },
            choose_project: {
                allowNull: { args: false, msg: 'Plesase enter the project name ' },
                type: DataTypes.STRING,
                validate : {
                ischoose_project(value, next) {
                    if (choose_project.includes(value)) {
                        return next();
                    } else {
                        return next('Invalid Project Name');
                    }
                }
            }
        },
        choose_project_phase: {
            allowNull: { args: false, msg: 'Please enter the choose project phase' },
            type: DataTypes.STRING,
            validate : {
            ischoose_project_phase(value, next) {
                if (choose_project_phase.includes(value)) {
                    return next();
                } else {
                    return next('Invalid Project Phase');
                }
             }
        }
    },
        task_worked_on: {
        allowNull: { args: false, msg: 'Enter the Task Name' },
        type: DataTypes.STRING
    },
        number_of_hours: {
        allowNull: { args: false, msg: 'Please enter Time by Hours:Minitus:Seconds' },
        type: DataTypes.TIME,
        validate: {

        }
    },
        any_comments: {
        type: DataTypes.STRING
    }
        }, {
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
return Timesheet;
}