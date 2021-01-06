'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeImg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RecipeImg.belongsTo(models.Recipe, {
        foreignKey: 'recipe_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  RecipeImg.init({
    image: DataTypes.STRING,
    recipeId: {
      type: DataTypes.INTEGER,
      field: 'recipe_id',
      references: {
        model: 'recipes',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'RecipeImg',
    tableName: 'recipe_imgs'
  });
  return RecipeImg;
};

