const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../Common/dbConnection");

class users extends Model {}

users.init(
  {
    u_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    firstName: {
      type: DataTypes.STRING(),
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING(),
      unique: true,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(),
      unique: true,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    phone_No: {
      type: DataTypes.BIGINT(),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "users",
    // paranoid: true,
    timestamps: true,
  }
);

module.exports = users;
