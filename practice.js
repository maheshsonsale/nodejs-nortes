const {MongoClient} = require("mongodb");
const database = 'instagram';
const url ="mongodb://localhost:27017";
const client=new MongoClient(url);

async function getData(){
  const result= await client.connect();
  const db=result.db(database);
  const collections=db.collection("logindata")
  // const response=await collections.insertOne({name:"ramesh",mobile:1234567890,email:"ramesh@123gmail.com",password:"ramesh@123"});
  const response=await collections.find({}).toArray()
  console.log(response);

}
getData()