const Sequelize = require('sequelize');
const { Op } = Sequelize;
const globalSearchQuery = (query) => {
  const text = query.q;
  const searchQueries = [];
  const nameQuery = { name: { [Op.iLike]: `%${text}%` } };
  searchQueries.push(nameQuery);

  const workFromQuery = Sequelize.where(
    Sequelize.cast(Sequelize.col('Timesheet.work_from'), 'varchar'),
    {
      [Op.iLike]: `%${text}%`
    }
  );
  searchQueries.push(workFromQuery);
  const chooseProjectQuery = Sequelize.where(
    Sequelize.cast(Sequelize.col('Timesheet.choose_project'), 'varchar'),
    {
      [Op.iLike]: `%${text}%`
    }
  );
  searchQueries.push(chooseProjectQuery);
  const chooseProjectPhaseQuery = Sequelize.where(
    Sequelize.cast(Sequelize.col('Timesheet.choose_project_phase'), 'varchar'),
    {
      [Op.iLike]: `%${text}%`
    }
  );
  searchQueries.push(chooseProjectPhaseQuery);
  const taskWorkedOnQuery = Sequelize.where(
    Sequelize.cast(Sequelize.col('Timesheet.task_worked_on'), 'varchar'),
    {
      [Op.iLike]: `%${text}%`
    }
  );
  searchQueries.push(taskWorkedOnQuery);
  const numberOfHoursQuery = Sequelize.where(
    Sequelize.cast(Sequelize.col('Timesheet.number_of_hours'), 'varchar'),
    {
      [Op.like]: `%${text}%`
    }
  );
  searchQueries.push(numberOfHoursQuery);
  const anyCommentsQuery = Sequelize.where(
    Sequelize.cast(Sequelize.col('Timesheet.any_comments'), 'varchar'),
    {
      [Op.iLike]: `%${text}%`
    }
  );
  searchQueries.push(anyCommentsQuery);
  const result = {
    [Op.or]: searchQueries
  };
  return result;
}
module.exports = { globalSearchQuery };
