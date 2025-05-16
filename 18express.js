/*
command to install express ==>  npm i express
*/



const express=require('express')
//This line imports the Express module.
//Express is a lightweight framework built on top of Node.js to simplify handling HTTP requests and building web servers.
//require('express') loads the Express package so you can use its features
const app=express();
/*
 const app = express();
This creates an instance of an Express application.

app is now an object that represents your web server.

You use app to:

Define routes (like GET, POST)

Handle requests and responses

Configure middleware

Start the server
*/
/*
 GET Method
Used for: Retrieving data from the server.

Data sent: Appended to the URL as query parameters.

Example: example.com/search?query=javascript

Visible to user: Yes (in the URL).

Size limit: Yes (depends on the browser, around 2000 characters).

Cacheable: Yes.

Use case: When you just want to get/read data (e.g., search results, product listings).

✅ POST Method
Used for: Sending data to the server (often to create/update).

Data sent: In the request body, not in the URL.

Visible to user: No (not shown in the URL).

Size limit: Much larger than GET (based on server settings).

Cacheable: No (by default).

Use case: Submitting forms, login data, uploading files, etc.
*/
app.get('',(req,resp)=>{        //get ke first parameter ke first parameter me routes jata hain
    resp.send('hello this is home page')
})
app.get('/about',(req,resp)=>{        
    resp.send('hello this is about page')
})
app.listen(5000)