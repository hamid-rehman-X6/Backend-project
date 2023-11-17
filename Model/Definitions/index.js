let sequelize = require("../../Common/dbConnection");

let users = require("./user");
let teachers = require("./teacher");
let students = require("./student");
let courses = require("./courses");
let student_teacher_has_courses = require("./student_teacher_has_courses");

const db = {};
const models = {
  users,
  teachers,
  students,
  courses,
  student_teacher_has_courses,
};

// user and student one-to-one relation

users.hasOne(students, { onDelete: "CASCADE", foreignKey: "userID" });
students.belongsTo(users, { onDelete: "CASCADE", foreignKey: "userID" });

// user and teacher one-to-one relation

users.hasOne(teachers, { onDelete: "CASCADE", foreignKey: "userID" });
teachers.belongsTo(users, { onDelete: "CASCADE", foreignKey: "userID" });

// student and courses many-to-many relation

students.hasMany(student_teacher_has_courses, {
  onDelete: "CASCADE",
  foreignKey: "studentID",
});
student_teacher_has_courses.belongsTo(students, {
  onDelete: "CASCADE",
  foreignKey: "studentID",
});

// student  and courses many to many relation

teachers.hasMany(student_teacher_has_courses, {
  onDelete: "CASCADE",
  foreignKey: "teacherID",
});
student_teacher_has_courses.belongsTo(teachers, {
  onDelete: "CASCADE",
  foreignKey: "teacherID",
});

// student teacher and courses many to many relation

courses.hasMany(student_teacher_has_courses, {
  onDelete: "CASCADE",
  foreignKey: "courseID",
});
student_teacher_has_courses.belongsTo(courses, {
  onDelete: "CASCADE",
  foreignKey: "courseID",
});

sequelize.models = models;
db.sequelize = sequelize;

module.exports = { db, models };
