const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../Common/dbConnection");

class teachers extends Model {}

teachers.init(
  {
    teacher_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    T_department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    office_Location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "TEACHER",
    // paranoid: true,
    timestamps: true,
  }
);

module.exports = teachers;
