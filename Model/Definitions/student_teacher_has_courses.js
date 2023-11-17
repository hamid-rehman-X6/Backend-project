const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../Common/dbConnection");

class student_teacher_has_courses extends Model {}

student_teacher_has_courses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    paranoid: true,
    timestamps: true,
  }
);

module.exports = student_teacher_has_courses;
