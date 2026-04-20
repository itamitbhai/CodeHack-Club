import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import connectDb from "./config/db.js";


dotenv.config();

const app = express();
const _dirname = path.resolve();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// app.get("/", (_, res) => {
//   res.send("API is running...");
// });

app.use(express.static(path.join(_dirname, "/Frontend/dist")));
app.use((req, res) => {
  res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
});

const PORT = process.env.PORT ;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

