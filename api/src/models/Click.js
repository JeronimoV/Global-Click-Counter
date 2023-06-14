const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Click", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
  });
};
