'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await Promise.all([
      queryInterface.changeColumn('recipes','ingredients',{
        type: Sequelize.TEXT
      }),
      queryInterface.changeColumn('recipes', 'instructions', {
      type: Sequelize.TEXT
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return await Promise.all([
      queryInterface.changeColumn('recipes', 'ingredients', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('recipes', 'instructions', {
        type: Sequelize.STRING
      }),
    ])
  }
};
