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
                        msg: 'Name should be Alphabeth'
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
                allowNull: { args: false, msg: 'Enter the Name' },
                type: DataTypes.ENUM({
                    values: ['Office', 'Home', 'Leave']
                }),
                validate: {
                    isAlpha: {
                        args: true,
                        msg: 'Please enter Alphabet letters'
                    },
                }
            },
            choose_project: {
                allowNull: { args: false, msg: 'Enter the Name' },
                type: DataTypes.STRING,
                ischoose_project(value, next) {
                    if (choose_project.includes(value)) {
                        return next();
                    } else {
                        return next('Invalid Project Name');
                    }
                }
        },
        choose_project_phase: {
            allowNull: { args: false, msg: 'Enter the Name' },
            type: DataTypes.STRING,
            ischoose_project_phase(value, next) {
                if (choose_project_phase.includes(value)) {
                    return next();
                } else {
                    return next('Invalid Project Phase');
                }
        }
    },
        task_worked_on: {
        allowNull: { args: false, msg: 'Enter the Name' },
        type: DataTypes.STRING
    },
        number_of_hours: {
        allowNull: { args: false, msg: 'Enter the Name' },
        type: DataTypes.TIME
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