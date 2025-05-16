const { name } = require('ejs');
const dbconnect=require('./mongodb')

async function deltedata(){
let data=await dbconnect()
let result= await data.deleteOne({name:"mahesh sonsale"})
console.log(result);

}
deltedata()