const userServices = require("../../Services/teacherServices");

module.exports = async function (req, res) {
  const data = await userServices.getTeacherById(req.query.id);
  res.send(data);
};
