const { models } = require("../Model/Definitions");

module.exports = {
  createUser: async function (body) {
    const data = await models.users.create(body);
    return data;
  },

  getUserById: async function (id) {
    const data = await models.users.findByPk(id, {
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    return data;
  },

  getAllUser: async function (body) {
    // const data = await models.users.findAll(body);
    const data = await models.users.findAll({
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    });

    return data;
  },

  deleteUser: async function (id) {
    const data = await models.users.destroy({
      where: {
        u_ID: id,
      },
    });
    console.log(data);
    return data;
  },

  updateUser: async function (body) {
    const data = await models.users.update(
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
