var express = require("express");
var router = express.Router();

var {
  createUser,
  getUserById,
  getAllUser,
  deleteUser,
  updateUser,
} = require("../Controller/index");

router.post("/createUSER", createUser);
router.get("/getUserById", getUserById);
router.get("/getAllUser", getAllUser);
router.delete("/deleteUser", deleteUser);
router.put("/updateUser", updateUser);

module.exports = router;
