const { models } = require("./Definitions");

const { createUser } = require("../Model/userModel");

module.exports = {
  createStudent: async function (body) {
    const userdata = {
      firstName: body.firstName,
      lastName: body.lastName || "",
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
    };
    const user = await createUser(userdata);
    const updatedStudent = { ...studentData, userID: user.u_ID };
    const data = await models.students.create(updatedStudent);
    return data;
  },

  getStudentById: async function (id) {
    const data = await models.students.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "deletedAt", "updatedAt"],
      },
    });
    const userid = data.userID;
    const userdata = await models.users.findByPk(userid, {
      attributes: {
        exclude: ["password", "u_ID", "createdAt", "deletedAt", "updatedAt"],
      },
    });

    const finalUser = { data, userdata };
    return finalUser;
  },

  getAllStudent: async function (body) {
    const data = await models.students.findAll(body, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    const userids = data.map((student) => student.userid);

    const userData = await models.users.findAll({
      where: {
        u_ID: userids,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    const finalUser = { data, userData };
    return finalUser;
  },

  deleteStudent: async function (id) {
    //   const data = await models.students.destroy({
    //     where: {
    //       student_ID: id,
    //     },
    //   });
    //   return data;

    const student = await models.students.findByPk(id);
    const uid = student.userID;
    const deletestudent = await models.students.destroy({
      where: {
        student_ID: id,
      },
    });

    const deleteuser = await models.users.destroy({
      where: {
        u_ID: uid,
      },
    });
    return { deletestudent, deleteuser };
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
