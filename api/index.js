import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()
dotenv.config();

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB")
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", ()=> {
    console.log("mongoDB disconnected!")
})

// mongoose.connection.on("Connected", ()=> {
//     console.log("mongoDB Connected!")
// })

// app.get("/users", (req,res)=>{
//     res.send("hello first request!")
// })


app.listen(8800, ()=>{
    connect()
    console.log("Connect to backend!")
})