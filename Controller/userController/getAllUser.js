const userServices = require("../../Services/userServices");

module.exports = async function (req, res) {
  const data = await userServices.getAllUser(req.body);
  res.send(data);
};
