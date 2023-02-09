// const express=require("express")
const express=require('express')
app=express()
const router=express.Router()
// const Signup=require("../Model/signup_models")


router.post('/login',(req,res)=>{
    console.log(req.body)
    res.json({"key":req.body,"status_code":200})
})

router.post("/signup",async(req,res)=>{
    // const signup=await Signup.collection.insertOne({
        
    // })
    // password=req.body.password 
    res.json({"key":req.body.email,"status_code":200})
})


module.exports=router