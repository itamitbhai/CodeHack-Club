import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    required: function () {
      return this.eventType !== "debug-master";
    },
    match: /^[0-9]{11}$/
  },

  name: {
    type: String,
    required: true
  },

  branch: {
    type: String,
    required: true
  },

  semester: {
    type: Number,
    required: true
  },

  year: {
    type: String,
    required: true
  },

  gender: {
    type: String,
    enum: ["male", "female"],
    required: true
  }
});


const codeRelaySchema = new mongoose.Schema({

  registrationNumber: {
    type: String,
    required: true,
    match: /^[0-9]{11}$/
  },

  teamName: String,

  leaderName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/
  },

  branch: {
    type: String,
    required: true
  },

  batch: {
    type: String,
    required: true
  },

  semester: {
    type: Number,
    min: 1,
    max: 8,
    required: true
  },

  year: {
    type: String,
    required: true
  },

  members: [memberSchema],

  college: String,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

export const codeRelayModel = mongoose.model(
  "Code-Relay Team",
  codeRelaySchema
);