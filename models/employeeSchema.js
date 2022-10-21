const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  techskills: {
    type: String,
  },

  experience: {
    type: String,
  },

  communication: {
    type: String,
  },
  company: {
    type: String,
  },
});

const employee = mongoose.model("employees", employeeSchema);
module.exports = employee;
