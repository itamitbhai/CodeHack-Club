import { DebugMasterModel } from "../models/debugMasterModel.js";

export const registerDebugMasterController = async (req, res) => {
  try {
    const {
      registrationNumber,
      name,
      email,
      phone,
      branch,
      batch,
      semester,
      college,
      gender
    } = req.body;

    //---------------------------//
    // 🔹 Basic Validation
    //---------------------------//
    if (
      !registrationNumber?.trim() ||
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !branch?.trim() ||
      !batch?.trim() ||
      !college?.trim() ||
      !gender ||
      semester === "" || semester === undefined || semester === null
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //---------------------------//
    // 🔹 Format Validations
    //---------------------------//

    if (!/^[0-9]{11}$/.test(registrationNumber)) {
      return res.status(400).json({
        success: false,
        message: "Registration number must be 11 digits",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Phone must be 10 digits",
      });
    }

    const sem = Number(semester);

    if (sem < 1 || sem > 8) {
      return res.status(400).json({
        success: false,
        message: "Semester must be between 1 to 8",
      });
    }

    //---------------------------//
    // 🔹 Duplicate Check
    //---------------------------//
    const existing = await DebugMasterModel.findOne({
      $or: [{ email }, { registrationNumber }]
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }

    //---------------------------//
    // 🔹 Save Data
    //---------------------------//
    const data = await DebugMasterModel.create({
      registrationNumber,
      name,
      email,
      phone,
      branch,
      batch,
      semester: sem,
      college,
      gender
    });

    //---------------------------//
    // 🔹 Response
    //---------------------------//
    res.status(201).json({
      success: true,
      message: "Debug Master registration successful 🚀",
      data
    });

  } catch (error) {
    console.log(error); // debug ke liye
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};