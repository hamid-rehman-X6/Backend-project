const userServices = require("../../Services/userServices");

module.exports = async function (req, res) {
  // const data = await userServices.deleteUser(req.query.id);
  // res.status(200).send(data);

  try {
    const data = await userServices.deleteUser(req.query.id);
    // res.status(200).send(data);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};
