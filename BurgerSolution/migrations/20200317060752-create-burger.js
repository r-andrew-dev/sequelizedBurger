'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Burgers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      burger_name: {
        type: Sequelize.STRING
      },
      devoured: {
        type: Sequelize.BOOLEAN
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Burgers');
  }
};