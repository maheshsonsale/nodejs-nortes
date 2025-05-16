/*
make folder for html file and access it 
make html files 
load html files
====== folder name is public===========
*/  

const express=require('express')
const path=require('path')

const app =express() 
const publicpath=path.join(__dirname,'public')

app.use(express.static(publicpath)) 
/*
if the index file is there this will load by default and if you want to switch to another page you have to write 
like /about.html
*/


app.listen(5000)