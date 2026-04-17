import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import helmet from "helmet";
import morgan from "morgan";
import debugMasterRoute from "./routes/debugMasterRoute.js";
import codeRelayRoute from "./routes/codeRelayRoute.js";
import hackathonRoute from "./routes/hackathonRoute.js";

dotenv.config();

const app = express();

//------------------//
// Security         //
//------------------//
app.use(helmet());
app.use(morgan("dev"));

//------------------//
// Middleware       //
//------------------//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//------------------//
// ENV Based CORS   //
//------------------//
const allowedOrigins = process.env.NODE_ENV === "production" ? ["https://apnaDomain.com"] : [process.env.FRONTEND_URL];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); 

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed ❌"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

//------------------//
// Test route       //
//------------------//
app.get("/", (_ , res) => {
  res.send("API is running...");
});

//------------------//
// Routes           //
//------------------//
app.use("/event/debug-master", debugMasterRoute);
app.use("/event/code-relay", codeRelayRoute);
app.use("/event/hackathon", hackathonRoute);

//------------------//
// Start Server     //
//------------------//
const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running on port ${PORT}`);
});