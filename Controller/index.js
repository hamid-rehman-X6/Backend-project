module.exports = {
  // *********** USERS **********

  createUser: require("./userController/createUser"),
  getUserById: require("./userController/getUserById"),
  getAllUser: require("./userController/getAllUser"),
  deleteUser: require("./userController/deleteUser"),
  updateUser: require("./userController/updateUser"),

  // *********** TEACHERS **********

  createTeacher: require("./teacherController/createTeacher"),
  getTeacherById: require("./teacherController/getTeacherById"),
  getAllTeacher: require("./teacherController/getAllTeacher"),
  deleteTeacher: require("./teacherController/deleteTeacher"),
  updateTeacher: require("./teacherController/updateTeacher"),

  // *********** STUDENTS **********
  createStudent: require("./studentController/createStudent"),
  getStudentById: require("./studentController/getStudentById"),
  getAllStudent: require("./studentController/getAllStudent"),
  deleteStudent: require("./studentController/deleteStudent"),
  updateStudent: require("./studentController/updateStudent"),

  // *********** COURSES **********

  // createCourse: require("./coursesController/createCourse"),
  // getCourseById: require("./coursesController/getCourseById"),
  // getAllCourse: require("./coursesController/getAllCourse"),
  // deleteCourse: require("./coursesController/deleteCourse"),
  // updateCourse: require("./coursesController/updateCourse"),
};
