/*
if not install 
write : npm i mongodb
*/
// const MongoClient=require("mongodb").MongoClient
//both are same upper

const {MongoClient} =require("mongodb");
const database='college';
const url="mongodb://localhost:27017";
const client=new MongoClient(url);

async function getData(){
    let result=await client.connect();
    let db=result.db(database)
    let collections=db.collection('website')
    let response=await collections.find({}).toArray()
    console.log(response);
    
}
getData()

