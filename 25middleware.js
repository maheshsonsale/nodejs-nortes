 /* 
 what are middleware
 how to make middleware
 apply middleware on routes

 types of middleware:=>
    application level middleware    
    Route level middleware
    error handling middleware
    builtin middleware 
    third party middleware


 */
const express=require('express')
const app=express()

const appFilter=(req,resp,next)=>{
    if (!req.query.age) {
        resp.send('please provide age ')    //http://localhost:5000/?age=25
    }else if (req.query.age<18) {
        resp.send('you are under age')
    }
    else next()
}
app.use(appFilter)
app.get('/',(req,resp)=>{
    resp.send('home page')
})

app.get('/users',(req,resp)=>{
    resp.send('home userpage')
})
app.listen(5000)