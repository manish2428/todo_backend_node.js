const mongoose=require("mongoose")
const url='mongodb://localhost:27017/Todo_db'

// mongooose.connect(url, {
// 	useNewUrlParser: true,
// 	useFindAndModify: false //   DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated. See: https://mongoosejs.com/docs/deprecations.html#-findandmodify-
// })

function db_connection(){
  try{
    mongoose.connect(url, {
 useNewUrlParser: true,
 
})}catch(error){
console.log(error)
}finally{
  console.log("connected to database.")  
}
}

module.exports={db_connection}


