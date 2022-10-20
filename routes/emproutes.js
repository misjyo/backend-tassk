const express = require("express");
const empRouter = new express.Router();
const { addEmp, view } = require("../controller/employee.controller");

empRouter.post("/add-emp", addEmp);

empRouter.get("/view-emp", view);

module.exports = empRouter;
