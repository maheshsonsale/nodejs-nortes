/*
render html and json (display)
*/
/*
command to install express ==>  npm i express
*/

const express=require('express')
const app=express();
app.get('',(req,resp)=>{       
    resp.send(`
        <h1> This is Home Page </h1>
        <a href="/about">About</a>
        `)
})
app.get('/about',(req,resp)=>{        
    resp.send(`
        <input type='text' placeholder='Enter name' value="${req.query.name}"/>
        <button>click me</button> <br>
        <a href="/">Home</a>
        `)
})
app.get('/json',(req,resp)=>{
    resp.send([{name:'mahesh',age:24,contact:903941},{name:'jivan',age:34,contact:45841}])
})
app.listen(5000)