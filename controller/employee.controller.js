const jwt = require("jsonwebtoken");
const employee = require("../models/employeeSchema");

const addEmp = async (req, res) => {
  // console.log("done");
  try {
    const token = req.header("token");
    const verify = jwt.verify(token, "asdfghjklqwertyu");
    if (!verify) {
      return res.status(401).send("token not match");
    }
    let { name, techskills, experience, communication, company } = req.body;
    if (!name || !techskills || !experience || !communication || !company) {
      return res.json({ Error: "all fields are required" });
    }
    const data = {
      name,
      techSkills: techskills,
      experience,
      communication,
      company,
    };
    const addEmp = await employee.create(data);

    res.status(201).json({ status: 201, addEmp });
  } catch (err) {
    res.status(401).json({ status: 401, Error: err.message });
  }
};

const view = async (req, res) => {
  try {
    const token = req.header("token");

    const verify = jwt.verify(token, "asdfghjklqwertyu");
    if (!verify) {
      return res.status(401).send("token not match");
    }
    const empData = await employee.find();
    console.log(empData);
    res.json({ status: "200", response: empData });
  } catch (err) {
    next(err);
  }
};

module.exports = { addEmp, view };
