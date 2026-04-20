import mongoose from "mongoose";

const connectDb = async ()=>{
    try { 
      await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Database Connected ✔️")
    } catch (error) {
        console.log("Database Connection Error ❌", error.message );
    }
}
export default connectDb;
