const mongoose = require("mongoose");

const StaffData = new mongoose.Schema({
  EmpName: {
    type: String,
    require: true,
  },
  EmpEmail: {
    type: String,
    require: true,
  },
  EmpPassword: {
    type: String,
    require: true,
  },
  EmpPho: {
    type: String,
    require: true,
  },
  EmpAdd: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("StaffList", StaffData);
