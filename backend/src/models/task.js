const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Pendente',
  },
});

module.exports = Task;