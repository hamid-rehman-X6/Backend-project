var express = require("express");
var router = express.Router();

var {
  createTeacher,
  getTeacherById,
  getAllTeacher,
  deleteTeacher,
  updateTeacher,
} = require("../Controller/index");

router.post("/createTeacher", createTeacher);
router.get("/getTeacherById", getTeacherById);
router.get("/getAllTeacher", getAllTeacher);
router.delete("/deleteTeacher", deleteTeacher);
router.put("/updateTeacher", updateTeacher);

module.exports = router;
