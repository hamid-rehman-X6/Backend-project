var express = require("express");
var router = express.Router();

var {
  createStudent,
  getStudentById,
  getAllStudent,
  deleteStudent,
  updateStudent,
} = require("../Controller/index");

router.post("/createStudent", createStudent);
router.get("/getStudentById", getStudentById);
router.get("/getAllStudent", getAllStudent);
router.delete("/deleteStudent", deleteStudent);
router.put("/updateStudent", updateStudent);

module.exports = router;
