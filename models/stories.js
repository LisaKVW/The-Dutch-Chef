'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Stories.belongsTo(models.Chef, {
        foreignKey: 'chef_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  Stories.init({
    title: DataTypes.STRING,
    story: {
      type: DataTypes.TEXT,
      get: function (value) {
        return this.getDataValue(value).split('  ')
      }
    },
    image: DataTypes.STRING,
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
    modelName: 'Stories',
    tableName: 'stories'
  });
  return Stories;
};