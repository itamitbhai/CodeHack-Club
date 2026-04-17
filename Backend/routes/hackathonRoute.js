import express from "express";
import { registerHackathonController } from "../controllers/hackathonController.js";

const hackathonRoute = express.Router();

hackathonRoute.post("/", registerHackathonController);

export default hackathonRoute;