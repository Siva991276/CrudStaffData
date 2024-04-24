const StaffData = require("../model/StaffModel");

const AddStaffData = async (req, res) => {
  try {
    const { EmpName, EmpEmail, EmpPassword, EmpPho, EmpAdd } = req.body;

    const ExistEmail = await StaffData.findOne({ EmpEmail });
    if (ExistEmail) {
      return res.status(400).json({
        message: "Email Already Exist",
        success: false,
      });
    }
    const newStaff = new StaffData({
      EmpName,
      EmpEmail,
      EmpPassword,
      EmpPho,
      EmpAdd,
    });
    await newStaff.save();
    return res.status(200).json({
      message: "Staff Added Successfully",
      success: true,
      data: newStaff,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const GetStaffData = async (req, res) => {
  try {
    const GetData = await StaffData.find();
    return res.status(200).json({
      message: "Staff Data Fetched Successfully",
      success: true,
      data: GetData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const GetSingleData = async (req, res) => {
  try {
    const { id } = req.params;
    const GetData = await StaffData.findById(id);
    if (!GetData) {
      return res.status(404).json({
        message: "Staff Data Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Staff Data Fetched Successfully",
      success: true,
      data: GetData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const UpdateStaffData = async (req, res) => {
  try {
    const { id } = req.params;

    const { EmpName, EmpEmail, EmpPassword, EmpPho, EmpAdd } = req.body;

    const updateData = await StaffData.findByIdAndUpdate(id, {
      EmpName,
      EmpEmail,
      EmpPassword,
      EmpPho,
      EmpAdd,
    });
    if (!updateData) {
      return res.status(404).json({
        message: "Staff Data Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Staff Data Updated Successfully",
      success: true,
      data: updateData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteData = await StaffData.findByIdAndDelete(id);
    if (!deleteData) {
      return res.status(404).json({
        message: "Staff Data Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Staff Data Deleted Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
module.exports = {
  AddStaffData,
  GetStaffData,
  GetSingleData,
  UpdateStaffData,
  deleteStaff,
};
