/*
how to make loops in ejs
make header file
show common header file
*/
/*
what is the template engine
install ejs template package
setup dynamic rounting

npm install ejs

whenever we use template engine we need "views" folder
*/
const express=require('express')
const app=express()

const path=require('path')
const filepath=path.join(__dirname,'/public')

app.set('view engine','ejs')    //connecting profile.ejs

app.get('/',(req,resp)=>{
    resp.sendFile(`${filepath}/index.html`)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${filepath}/about.html`)
})
app.get('/profile',(req,resp)=>{
    const user={
        name:'ram',
        age:12,
        email:'abc@gmail.com',
        city:'indore',
        skills:['php','js','html']
    }
    resp.render('profile',{user})
})

app.listen(5000)





