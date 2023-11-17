const userServices = require("../../Services/studentServices");

module.exports = async function (req, res) {
  const data = await userServices.deleteStudent(req.query.id);
  console.log(data);
  res.sendStatus(200);
};
