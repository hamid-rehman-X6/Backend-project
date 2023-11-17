const userServices = require("../../Services/teacherServices");

module.exports = async function (req, res) {
  const data = await userServices.updateTeacher(req.body);
  res.send(data);
};
