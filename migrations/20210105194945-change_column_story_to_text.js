'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await Promise.all([
      queryInterface.changeColumn('stories', 'story', {
        type: Sequelize.TEXT
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return await Promise.all([
      queryInterface.changeColumn('stories', 'story', {
        type: Sequelize.STRING
      })
    ])
  }
};