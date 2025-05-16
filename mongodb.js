const {MongoClient} =require("mongodb");
const databaseName='college';
const url="mongodb://localhost:27017";
const client=new MongoClient(url);

async function dbconnect() {
    let result=await client.connect();
    db =result.db(databaseName)
    return db.collection('collegeStudents')
}

module.exports=dbconnect;