const userModel = require("../Model/teacherModel");

module.exports = {
  createTeacher: async function (body) {
    const data = await userModel.createTeacher(body);
    return data;
  },

  getTeacherById: async function (id) {
    const data = await userModel.getTeacherById(id);
    return data;
  },

  getAllTeacher: async function (body) {
    const data = await userModel.getAllTeacher(body);
    return data;
  },

  deleteTeacher: async function (id) {
    const data = await userModel.deleteTeacher(id);
    return data;
  },

  updateTeacher: async function (body) {
    const data = await userModel.updateTeacher(body);
    return data;
  },
};
