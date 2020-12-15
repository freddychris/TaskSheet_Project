'use strict';
module.exports={
    up: (queryInterface, Sequelize) =>{
        return queryInterface.createTable('timesheets',{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.BIGINT 
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        work_from: {
            allowNull: false,
            type: Sequelize.STRING
        },
        choose_project: {
            allowNull: false,
            type: Sequelize.STRING
        },
        choose_project_phase: {
            allowNull: false,
            type: Sequelize.STRING
        },
        task_worked_on: {
            allowNull: false,
            type: Sequelize.STRING
        },
        number_of_hours: {
            allowNull: false,
            type: Sequelize.STRING
        },
        any_comments: {
            allowNull: false,
            type: Sequelize.STRING
        },
        created_at: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updated_at: {
            allowNull: false,
            type: Sequelize.DATE
        }
    });
    },
down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('timesheets');
 }
};