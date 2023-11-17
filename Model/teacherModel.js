const { models } = require("./Definitions");

const { createUser } = require("../Model/userModel");

module.exports = {
  createTeacher: async function (body) {
    const userdata = {
      firstName: body.firstName,
      lastName: body.lastName,
      userName: body.userName,
      email: body.email,
      password: body.password,
      phone_No: body.phone_No,
      address: body.address,
    };

    const teacherdata = {
      T_department: body.T_department,
      specialization: body.specialization,
      office_Location: body.office_Location,
    };

    const user = await createUser(userdata);
    const updated = { ...teacherdata, userID: user.u_ID };
    const data = await models.teachers.create(updated);
    return data;
  },

  getTeacherById: async function (id) {
    const data = await models.teachers.findByPk(id);
    return data;
  },

  getAllTeacher: async function (body) {
    const data = await models.teachers.findAll(body);
    return data;
  },

  deleteTeacher: async function (id) {
    const data = await models.teachers.destroy({
      where: {
        teacher_ID: id,
      },
    });
    return data;
  },

  updateTeacher: async function (body) {
    const data = await models.teachers.update(
      { ...body },
      { where: { id: body.id } }
    );
    // return data;
    if (data) {
      return "success";
    } else {
      return "failed";
    }
  },
};
