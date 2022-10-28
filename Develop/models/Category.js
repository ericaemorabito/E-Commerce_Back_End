const { Model, DataTypes } = require('sequelize');
const { truncate } = require('../config/connection.js');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true
    },
    category_name: {
      type: DateType.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
