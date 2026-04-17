import { RegistrationModel } from "../models/RegistrationModel.js";

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
// Register Hackathon     //
//------------------------//
export const registerHackathonController = async (req, res) => {
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
      members,
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format"
      });
    }

    //------------------------------//
    // Phone validation (10 digit)  //
    //------------------------------//
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
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
    // Members validation (4 only)  //
    //------------------------------//
    if (!members || members.length !== 4) {
      return res.status(400).json({
        message: "Hackathon requires exactly 4 members"
      });
    }

    for (let m of members) {
      if (
        !m.registrationNumber ||
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
    // Duplicate check (leader registration no.)  //
    //--------------------------------------------//
    const existing = await RegistrationModel.findOne({
      registrationNumber,
      eventType: "hackathon"
    });

    if (existing) {
      return res.status(400).json({
        message: "Already registered for Hackathon"
      });
    }

    //------------------//
    // Save to DB       //
    //------------------//
    const registration = await RegistrationModel.create({
      eventType: "hackathon",
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
      message: "Hackathon registration successful 🚀",
      data: registration
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};