

import dotenv from "dotenv";
import connectDB from './db/db.js';
dotenv.config({
    path:'./env'
})
connectDB();








/*
import express from 'express';
const app=express();
app.get('/',(req,res)=>{
    res.send("hello everyone")
})


(async()=>{
    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error",(error)=>{
        console.log("ERROR",error)
      })

       //listning
       app.listen(process.env.PORT,(req,body)=>{
        res.send("app listen at server port 8000")
    })



    } catch (error) {
       console.error("Error",error) ;
       throw error;
    }
})()
    */