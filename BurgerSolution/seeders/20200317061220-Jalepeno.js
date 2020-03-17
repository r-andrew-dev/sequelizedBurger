'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Burgers', [
      {
        burger_name: 'Jalepeno Burger',
        devoured: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      burger_name: 'Cheese Burger',
      devoured: false,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      burger_name: 'Hamburger',
      devoured: false,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      burger_name: 'Pizza Burger',
      devoured: false,
      createdAt: new Date(),
      updatedAt: new Date()
      }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jalepeno Burger', 'Cheese Burger', 'Hamburger', 'Pizza Burger', null, {});
  }
};
