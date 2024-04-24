const express = require("express");
const router = express.Router();

const ControllerStaff = require("../Controller/StaffController");

router.post("/AddStaff", ControllerStaff.AddStaffData);
router.get("/GetStaffData", ControllerStaff.GetStaffData);
router.get("/GetSingleData/:id", ControllerStaff.GetSingleData);
router.put("/UpdateStaffData/:id", ControllerStaff.UpdateStaffData);
router.delete("/deleteStaff/:id", ControllerStaff.deleteStaff);

module.exports = router;
