import express from "express";
import { registerDebugMasterController } from "../controllers/debugMasterController.js";

const debugMasterRoute = express.Router();


//---------------------//
// Debug Master Route  //
//---------------------//
debugMasterRoute.post("/", registerDebugMasterController);


export default debugMasterRoute