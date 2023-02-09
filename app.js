const express=require('express')
const app=express()

require('dotenv').config()
const bodyparser=require('body-parser')
const emailvalidator=require('email-validator')
const {db_connection}=require('./db/db_connection')
const Signup=require("./Model/signup_models")
db_connection()
const cors=require("cors")
const bcrypt=require('bcrypt')

const log_signup=require("./routing/login_signup")
const list=require("./routing/list")
const { count } = require('./Model/signup_models')


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
app.use('/todo',list)
app.use('/validate',log_signup)

app.post('/home',(req,res)=>{
     console.log(req.body)
res.send("This is homepage")
})

app.post('/login',async(req,res)=>{
          const password=await Signup.find({email:req.body.email})
          bcrypt.compare(req.body.password,password[0].password, (err, data) => {
          if(err){
              return res.status(400).json({"err":"error_occured"})
          }
          if (data) {
              return res.status(200).json({ "msg": "Login success" })
          }else {
              return res.status(401).json({ "msg": "Invalid credencial" })
          }

          })
})

app.post('/signup',async(req,res)=>{
     if(!emailvalidator.validate(req.body.email)){
          return res.json({'error':"Please provide valide email address","status_code":500})
     }
     const hash=await bcrypt.hashSync(req.body.password,10)

 
     try{
          const fetch_email=await Signup.find({email:req.body.email})
          // console.log(fetch_email)
          if(fetch_email.length===0){
          const signup=await new Signup({
               fullname:req.body.fullname,
               email:req.body.email,
               password:hash,
               phoneno:req.body.phoneno,
               delete:req.body.delete
          })
          signup.save();
          }
          else{
               res.status_code=500
               return res.json({"error":"Email already exist."})
          }
     }catch{
          res.status_code=400
          return res.json({'error':'error occured while inserting data in mongo'})
     }finally{
          res.status_code=200
          return res.json({'message':'User registered successfully'})
     }
})

app.listen(process.env.PORT||3000,process.env.IP,function(req,res){
     console.log("Running.....")
});