const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../Common/dbConnection");

class students extends Model {}

students.init(
  {
    student_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    registration_No: {
      type: DataTypes.STRING(),
      unique: true,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    degreeName: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dateofBirth: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "STUDENT",
    // paranoid: true,
    timestamps: true,
  }
);

module.exports = students;
