const userServices = require("../../Services/teacherServices");

module.exports = async function (req, res) {
  const data = await userServices.deleteTeacher(req.query.id);
  console.log(data);
  res.sendStatus(200);
};
