/*
make post method for api
send data from postman  
get data in nodejs by request
write code to insert data in mongo db

*/

const express=require('express');
const dbconnect = require('./mongodb');
const app=express()

app.get('/',async(req,resp)=>{
    let data=await dbconnect()
    data=await data.find().toArray()
    resp.send(data )
});

app.post('/',async(req,resp)=>{
    let data=await dbconnect()
    let result=await data.insertOne(req.body)
    resp.send(result)
})
app.listen(5000)
