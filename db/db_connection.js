const {MongoClient}=require("mongodb")
const url='mongodb://localhost:27017/Todo_db'



async function db_connection(){
await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });
}

module.exports={db_connection}


