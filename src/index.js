
import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from './db/db.js';
dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
app.listen(process.env.PORT||8000,()=>{
    console.log(`server rinning at port ${process.env.PORT}`)
})
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED",err)
})






