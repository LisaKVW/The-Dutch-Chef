'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.changeColumn('recipes', 'tips', {
      type: Sequelize.TEXT
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.changeColumn('recipes', 'tips', {
      type: Sequelize.STRING
    })
  }
};
