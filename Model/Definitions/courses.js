const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../Common/dbConnection");

class courses extends Model {}

courses.init(
  {
    course_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    course_Code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },

    course_Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    credit_Hours: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },

    lab: {
      type: DataTypes.BOOLEAN,
      // defaultValue: false,
      allowNull: false,
    },
  },
  {
    sequelize,
    // modelName: "Courses",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = courses;
