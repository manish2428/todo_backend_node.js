var express=require('express')
require('dotenv').config()
require('cors')
var app=express()

app.get('/',(req,res)=>{
res.send("hello world");
})

app.listen(8000,function(req,res){
    console.log("Running.....")
});