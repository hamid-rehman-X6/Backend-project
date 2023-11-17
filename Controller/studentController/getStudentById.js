const userServices = require("../../Services/studentServices");

module.exports = async function (req, res) {
  const data = await userServices.getStudentById(req.query.id);
  res.send(data);
};
