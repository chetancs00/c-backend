import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  console.log(`${process.env.MONGODB_URI}/${DB_NAME}`, "DB STRING");
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDB Connected!! DB HOST: 
            ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(error, "MONGO DB Connection error");
    process.exit(1);
  }
};

export default connectDB;
