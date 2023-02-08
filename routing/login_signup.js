const express=require("express")
const router=express.Router()

router.post('/login',(req,res)=>{
    res.json({"key":"login","status_code":200})
})

router.post("/signup",(req,res)=>{
    res.json({"key":"signup","status_code":200})
})


module.exports=router