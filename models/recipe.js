'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe.belongsTo(models.Chef, {
        foreignKey: 'chef_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
        Recipe.hasMany(models.RecipeImg, {
          foreignKey: 'recipe_id',
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
    }
  };
  Recipe.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    ingredients: {
      type: DataTypes.TEXT,
      get: function (value) {
        return this.getDataValue(value).split('\n')
      }
    },
    instructions: {
      type: DataTypes.TEXT,
      get: function (value) {
        return this.getDataValue(value).split('\n')
      }
    },
    tips: DataTypes.STRING,
    chefID: {
      type: DataTypes.INTEGER,
      field: 'chef_id',
      references: {
        model: 'chefs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Recipe',
    tableName: 'recipes'
  });
  return Recipe;
};