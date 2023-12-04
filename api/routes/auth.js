import express from "express";

const router = express.Router();



export default router


router.get("/", (req,res)=>{
    res.send("Hello, this is auth endpoint")
})
router.get("/register", (req,res)=>{
    res.send("Hello, this is auth register endpoint")
})