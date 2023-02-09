const express=require("express")
const router=express.Router()

const List=require('../Model/database_model')


router.get("/list",(req,res)=>{
    res.json({"key":"list_get","status":200})
})

router.post("/list",(req,res)=>{
    res.json({"key":"list_post","status":200})
})

router.put('/list/:id',(req,res)=>{
    res.json({"key":"list_put","status":200})
})

router.delete('/list/:id',(req,res)=>{
    res.json({"key":"list_delete","status_code":200})
})

module.exports=router