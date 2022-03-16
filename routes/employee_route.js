const express = require("express");
let router = express.Router();

//imports controllers
let EmployeeControlles = require("../controllers/emp_controller");

//post
router.post("/create", EmployeeControlles.CREATE_EMPLOYEE);

//getAll
router.get("/", EmployeeControlles.GET_ALL_EMP);

//update emp
router.patch("/update/:id", EmployeeControlles.UPDATE_EMP);

//delete emp
router.delete("/delete/:id", EmployeeControlles.DELETE_EMP);

//getOne emp
router.get("/findone/:id", EmployeeControlles.FIND_ONE_EMP);

module.exports = router;
