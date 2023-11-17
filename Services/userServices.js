const userModel = require("../Model/userModel");

const bcrypt = require("bcryptjs");

module.exports = {
  createUser: async function (body) {
    const hashedpassword = await bcrypt.hash(body.password, 10);
    const data = await userModel.createUser({
      ...body,
      password: hashedpassword,
    });
    return data;
  },

  getUserById: async function (id) {
    const data = await userModel.getUserById(id);
    return data;
  },

  getAllUser: async function (body) {
    const data = await userModel.getAllUser(body);
    return data;
  },

  deleteUser: async function (id) {
    const data = await userModel.deleteUser(id);
    return data;
  },

  updateUser: async function (body) {
    const data = await userModel.updateUser(body);
    return data;
  },

  // updateUser: async function (userId, updatedData) {
  //   return await userModel.update(updatedData, {
  //     where: { id: userId },
  //   });
  // },
};
