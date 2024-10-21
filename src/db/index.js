import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB database connected")
} catch (e) {
    console.log("MONGODB connection error", e)
}
}

export default connectDB