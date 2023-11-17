const userServices = require("../../Services/teacherServices");

module.exports = async function (req, res) {
  const data = await userServices.createTeacher(req.body);
  res.send(data);
};
