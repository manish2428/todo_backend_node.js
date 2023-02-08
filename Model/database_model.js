var mongoose=require('mongoose')
// var model=mongoose.Schema;

const todoschema=new Schema({
    title:String,
    description:String
})

module.exports=mongoose.model('Todo',todoschema)

