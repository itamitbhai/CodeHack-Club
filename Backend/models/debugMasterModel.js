import mongoose from "mongoose";

const debugMasterSchema = new mongoose.Schema({

  registrationNumber: {
    type: String,
    required: true,
    match: /^[0-9]{11}$/,
    trim: true
  },

  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    lowercase: true,
    trim: true
  },

  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
    trim: true
  },

  branch: {
    type: String,
    required: true,
    trim: true
  },

  batch: {
    type: String,
    required: true,
    trim: true
  },

  semester: {
    type: Number,
    required: true,
    min: 1,
    max: 8
  },

  college: {
    type: String,
    required: true,
    trim: true
  },
  
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

export const DebugMasterModel = mongoose.model("DebugMaster", debugMasterSchema);