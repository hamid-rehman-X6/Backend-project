const { models } = require("./Definitions");

const { createUser } = require("../Model/userModel");

module.exports = {
  createStudent: async function (body) {
    const userdata = {
      firstName: body.firstName,
      lastName: body.lastName,
      userName: body.userName,
      email: body.email,
      password: body.password,
      phone_No: body.phone_No,
      address: body.address,
    };

    const studentData = {
      registration_No: body.registration_No,
      department: body.department,
      degreeName: body.degreeName,
      semester: body.semester,
      dateofBirth: body.dateofBirth,
      gender: body.gender,
    };
    const user = await createUser(userdata);
    const updatedStudent = { ...studentData, UserId: user.u_ID };
    const data = await models.students.create(updatedStudent);
    return data;
  },

  getStudentById: async function (id) {
    const data = await models.students.findByPk(id);
    return data;
  },

  getAllStudent: async function (body) {
    const data = await models.students.findAll(body);
    return data;
  },

  deleteStudent: async function (id) {
    const data = await models.students.destroy({
      where: {
        student_ID: id,
      },
    });
    return data;
  },

  updateStudent: async function (body) {
    const data = await models.students.update(
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
