import express from "express";
import { registerCodeRelayController } from "../controllers/codeRelayController.js";

const codeRelayRoute = express.Router();

codeRelayRoute.post("/", registerCodeRelayController);

export default codeRelayRoute;