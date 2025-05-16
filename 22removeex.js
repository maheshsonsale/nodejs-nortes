const express=require('express')
const app=express()

const path=require('path')
const filepath=path.join(__dirname,'/public')

app.get('/',(req,resp)=>{
    resp.sendFile(`${filepath}/index.html`)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${filepath}/about.html`)
})
// app.get('*',(req,resp)=>{
//     resp.sendFile(`${filepath}/nopage.html`)
// })
app.listen(5000)