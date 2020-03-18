'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Burgers', [
      {
        burger_name: 'Jalepeno Burger',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      burger_name: 'Cheese Burger',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      burger_name: 'Hamburger',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      burger_name: 'Pizza Burger',
      createdAt: new Date(),
      updatedAt: new Date()
      }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jalepeno Burger', 'Cheese Burger', 'Hamburger', 'Pizza Burger', null, {});
  }
};
