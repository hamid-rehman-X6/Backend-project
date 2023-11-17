const userServices = require("../../Services/teacherServices");

module.exports = async function (req, res) {
  const data = await userServices.getAllTeacher(req.body);
  res.send(data);
};
