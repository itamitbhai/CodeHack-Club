import mongoose from "mongoose";
import dotenv  from "dotenv";
dotenv.config()

const connectDb = async ()=>{
    try { 
      await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongoDB database connected ✔️")
    } catch (error) {
        console.log("database connection error ❌");
    }
}
export default connectDb;
