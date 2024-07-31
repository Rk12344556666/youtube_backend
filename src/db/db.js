import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";
import 'dotenv/config.js'

const connectDB=async ()=>{
    try {
      const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
console.log(`\n Mongodb connect !! db host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("mongodb connection error",error)
        process.exit(1)
    }
}
export default connectDB;