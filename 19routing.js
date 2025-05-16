const express=require('express')
const app=express();
app.get('',(req,resp)=>{        
    console.log("data receive from browser",req.query.name);  // just refresh the browser
    
    resp.send('hello this is home page welcome '+req.query.name)
})
app.get('/about',(req,resp)=>{        
    resp.send('hello this is about page')
})
app.listen(5000)
//http://localhost:5000/?name=mahesh type like this