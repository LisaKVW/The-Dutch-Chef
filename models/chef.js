'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chef extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chef.hasMany(models.Recipe, {
        foreignKey: 'chef_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

      Chef.hasMany(models.Stories, {
        foreignKey: 'chef_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  Chef.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Chef',
    tableName:'chefs'
  });
  return Chef;
};