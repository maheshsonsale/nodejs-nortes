const dbconnect= require('./mongodb');
/*
read data from mongodb
make file for db connection
handle promise

*/

// const {MongoClient} =require("mongodb");
// const databaseName='college';
// const url="mongodb://localhost:27017";
// const client=new MongoClient(url);

// async function dbconnect() {
//     let result=await client.connect();
//     db =result.db(databaseName)
//     return db.collection('website')
// }
//upper data will be called from mongodb.js

//***********use 1 or 2 *************************/
// dbconnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.warn(data);
//     })
// })

const main= async () => {
    let data=await dbconnect();
    data=await data.find().toArray();
    console.warn(data);
}
main()