var express = require("express");
var router = express.Router();

var {
  createUser,
  getUserById,
  getAllUser,
  deleteUser,
  updateUser,
} = require("../Controller/index");
// const authenticationController = require("../Controller/authentication/authenticationController");

router.post("/createUSER", createUser);
router.get("/getUserById", getUserById);
router.get(
  "/getAllUser",
  //  authenticationController.authenticate,
  getAllUser
);
router.delete("/deleteUser", deleteUser);
router.put("/updateUser", updateUser);
// router.post("/login", authenticationController.login);

module.exports = router;
