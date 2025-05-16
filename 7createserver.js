const http=require('http')

// http.createServer((req,res)=>{
//     res.write('<h1>hello this is first server</h1>');
//     res.end()
// }).listen(4500)

function dataControl(req,resp){
    resp.write('<h1>hello this is first server</h1>');
    resp.end()
}
http.createServer(dataControl).listen(5000)
