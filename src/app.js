import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({
    limit:"16kb"//json data limit
}))

// url se data
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))
//static file ke liye
app.use(express.static("public"))

// cookie parser
app.use(cookieParser());

export {app}