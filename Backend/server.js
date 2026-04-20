import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDb from "./config/db.js";

// config लोड करें
dotenv.config();

const app = express();

// Middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS settings - Render पर डिप्लॉयमेंट के लिए origin को अभी "*" रखना सेफ है
app.use(cors({
  origin: "*", 
  credentials: true
}));

// Test Route - यह चेक करने के लिए कि API ज़िंदा है
app.get("/", (req, res) => {
  res.json({ message: "API is running successfully! 🚀" });
});

// Port settings - Render dynamic port देता है, इसलिए '|| 10000' ज़रूरी है
const PORT = process.env.PORT || 10000;

// Database Connection और Server Start
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`✔️ MongoDB Connected & Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("❌ Database connection failed:", err.message);
  process.exit(1);
});
