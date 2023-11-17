const userServices = require("../../Services/studentServices");

module.exports = async function (req, res) {
  const data = await userServices.getAllStudent(req.body);
  res.send(data);
};
