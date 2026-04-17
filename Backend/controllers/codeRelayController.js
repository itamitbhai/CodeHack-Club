import { codeRelayModel } from "../models/codeRelayModel.js";

//-------------------------------//
// Year auto-calc from semester  //
//-------------------------------//
const getYear = (sem) => {
  if (sem <= 2) return "1st";
  if (sem <= 4) return "2nd";
  if (sem <= 6) return "3rd";
  return "4th";
};


//------------------------//
// Register Code Relay    //
//------------------------//
export const registerCodeRelayController = async (req, res) => {
  try {
    const {
      registrationNumber,
      teamName,
      leaderName,
      email,
      phone,
      branch,
      batch,
      semester,
      members = [],
      college
    } = req.body;

    //------------------------//
    // Required fields check  //
    //------------------------//
    if (
      !registrationNumber ||
      !teamName ||
      !leaderName ||
      !email ||
      !phone ||
      !branch ||
      !batch ||
      !semester
    ) {
      return res.status(400).json({
        message: "All required fields missing"
      });
    }

    //------------------//
    // Email validation //
    //------------------//
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        message: "Invalid email format"
      });
    }

    //------------------------------//
    // Phone validation             //
    //------------------------------//
    if (!/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({
        message: "Phone must be 10 digits"
      });
    }

    //------------------------------//
    // Registration Number Check    //
    //------------------------------//
    if (!/^[0-9]{11}$/.test(registrationNumber)) {
      return res.status(400).json({
        message: "Invalid Registration Number"
      });
    }

    //----------------------//
    // Semester validation  //
    //----------------------//
    const sem = Number(semester);
    if (sem < 1 || sem > 8) {
      return res.status(400).json({
        message: "Semester must be between 1-8"
      });
    }

    const year = getYear(sem);

    //------------------------------//
    // Members validation (2 only)  //
    //------------------------------//
    if (members.length !== 2) {
      return res.status(400).json({
        message: "Code Relay requires exactly 2 members"
      });
    }

    for (let m of members) {
      if (
        !m.registrationNumber ||
        !/^[0-9]{11}$/.test(m.registrationNumber) ||
        !m.name ||
        !m.branch ||
        !m.semester ||
        !m.gender
      ) {
        return res.status(400).json({
          message: "Invalid member data"
        });
      }
    }

    //--------------------------------------------//
    // Duplicate check (leader reg no)            //
    //--------------------------------------------//
    const existing = await codeRelayModel.findOne({
      registrationNumber
    });

    if (existing) {
      return res.status(400).json({
        message: "Already registered for Code Relay"
      });
    }

    //------------------//
    // Save to DB       //
    //------------------//
    const newRegistration = await codeRelayModel.create({
      registrationNumber,
      teamName,
      leaderName,
      email,
      phone,
      branch,
      batch,
      semester: sem,
      year,
      members,
      college
    });

    //------------------//
    // Success Response //
    //------------------//
    res.status(201).json({
      success: true,
      message: "Code Relay registration successful 🚀",
      data: newRegistration
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};