const userServices = require("../../Services/userServices");

module.exports = async function (req, res) {
  try {
    // const data = await userServices.getUserById(req.query.id);

    if (!req.query.id) {
      throw new Error(`ID is missing in params!`);
    }
    const data = await userServices.getUserById(req.query.id);
    if (!data || data.length === 0) {
      throw new Error(`User not found.`);
    }
    res.send(data);
  } catch (error) {
    res.send({ error: error.message });
    // res.status(500).json({ message: "Server Error" });
  }
};
