const userServices = require("../../Services/userServices");

module.exports = async function (req, res) {
  const data = await userServices.createUser(req.body);
  res.send(data);
};
