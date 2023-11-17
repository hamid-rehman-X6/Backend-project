const userServices = require("../../Services/studentServices");

module.exports = async function (req, res) {
  const data = await userServices.createStudent(req.body);
  res.send(data);
};
