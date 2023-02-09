const mongoose=require('mongoose')
// const Schema=mongoose.Schema

const signup=new mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    phoneno:String,
    delete:Boolean
})
module.exports=mongoose.model('Signup',signup)