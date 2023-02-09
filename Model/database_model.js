var mongoose=require('mongoose')



const todoschema=new mongoose.Schema({
    title:String,
    description:String
})

module.exports=mongoose.model('Todo',todoschema)

