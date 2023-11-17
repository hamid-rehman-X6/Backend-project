const userServices = require("../../Services/userServices");

module.exports = async function (req, res) {
  const data = await userServices.updateUser(req.body);
  res.send(data);

  //   const userId = req.params.id; // Assuming you are getting the user ID from the request
  //   const updatedData = {
  //     /* your updated data */
  //   };

  //   try {
  //     await userServices.updateUser(userId, updatedData);
  //     res.send({ message: "User updated successfully" });
  //   } catch (error) {
  //     res.send({ error: "Failed to update user" });
  //   }
};
