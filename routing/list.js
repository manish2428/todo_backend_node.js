const express=require("express")
const router=express.Router()

const List=require('../Model/database_model')
// const Signup=require('../Model/signup_models')


router.get("/list",async(req,res)=>{
    try{
        var list=await List.find({})
    }catch{
        return res.status(400).json({"Message":"Internal server error"})
    }finally{
        
       return res.status(200).json({"data":list})
    }
})

router.post("/list",async(req,res)=>{
    try{
        const list1=await List.find({title:req.body.title})
        
        if(list1.length===0){
        const list=await List({
            title:req.body.title,
            description:req.body.description
        })
        list.save()
        }
        else{   
         res.status_code=500
         return res.json({"message":"Title cant be same"})
        }
    }catch{
        res.status_code=400
        return res.json({"message":"error while inserting data"})
    }finally{
        res.status_code=200
        return res.json({"message":"Document Inserted Successfully"})
    }

})

router.put('/list/:id',async(req,res)=>{
    try{
        updated_data={$set:{"title":req.body.title,"description":req.body.description}}
        var list=await List.updateOne({_id:req.params.id},{$set:{"title":req.body.title,"description":req.body.description}})
        // console.log(list)
    }catch{
        return res.status(400).json({"message":"Error occured while updating data"})
    }finally{
        return res.status(200).json({"message":list})
    }
     
})

router.delete('/list/:id',async(req,res)=>{
    try{
        updated_data={$set:{"title":req.body.title,"description":req.body.description}}
        var list=await List.deleteOne({_id:req.params.id})
        // console.log(list)
    }catch{
        res.status_code=400
        return res.json({"message":"Error occured while deleting document"})
    }finally{
        res.status_code=200
        return res.json({"message":"deleted","data":list})
    }
})

module.exports=router