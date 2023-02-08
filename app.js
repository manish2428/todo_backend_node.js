const express=require('express')
require('dotenv').config()
const cors=require("cors")

const log_signup=require("./routing/login_signup")
const list=require("./routing/list")

const app=express()

app.use(cors())
app.use('/todo',list)
app.use('/validate',log_signup)

app.get('/home',(req,res)=>{
res.send("hello world");
})

app.listen(3000,process.env.IP,function(req,res){
     console.log("Running.....")
});