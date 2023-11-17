const userModel = require("../Model/studentModel");

module.exports = {
  createStudent: async function (body) {
    const data = await userModel.createStudent(body);
    return data;
  },

  getStudentById: async function (id) {
    const data = await userModel.getStudentById(id);
    return data;
  },

  getAllStudent: async function (body) {
    const data = await userModel.getAllStudent(body);
    return data;
  },

  deleteStudent: async function (id) {
    const data = await userModel.deleteStudent(id);
    return data;
  },

  updateStudent: async function (body) {
    const data = await userModel.updateStudent(body);
    return data;
  },
};
