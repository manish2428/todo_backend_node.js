const express=require("express")
const router=express.Router()

const List=require('../Model/database_model')


router.get("/list",async(req,res)=>{
    try{
        var list=await List.find({})
    }catch{
        return res.status(400).json({"Message":"Internal server error"})
    }finally{
        
       return res.status(200).json({"data":list})
    }
})

router.post("/list",(req,res)=>{
    try{
        const list=List({
            title:req.body.title,
            description:req.body.description
        })
        list.save()
    }catch{
        return res.status(400).json({"message":"error while inserting data"})
    }finally{
        return res.status(200).json({"message":"Document Inserted Successfully"})
    }
    // res.status(200).json({"message":"Document Inserted Successfully"})  
})

router.put('/list/:id',(req,res)=>{
    res.status(200).json({"key":"list_put"})
})

router.delete('/list/:id',(req,res)=>{
    res.status(200).json({"key":"list_delete"})
})

module.exports=router