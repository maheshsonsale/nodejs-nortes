/*
make new api folder
import and use mongo config
make api for get data
test with postman
*/
const express=require('express');
const dbconnect = require('./mongodb');
const app=express()

app.get('/',async(req,resp)=>{
    let data=await dbconnect()
    data=await data.find().toArray()
    resp.send(data )

});
app.listen(4500)