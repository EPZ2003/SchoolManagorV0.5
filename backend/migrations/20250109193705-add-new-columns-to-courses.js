'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Courses', 'tdSubmission', {
      type: Sequelize.DATE,
      allowNull: true,
    });
    await queryInterface.addColumn('Courses', 'nextExam' ,{
      type: Sequelize.DATE,
      allowNull: true,
    });
    await queryInterface.addColumn('Courses', 'project' ,{
      type: Sequelize.DATE,
      allowNull: true,
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Courses','tdSubmission');
    await queryInterface.removeColumn('Courses','nextExam');
    await queryInterface.removeColumn('Courses','project');
  }
};
