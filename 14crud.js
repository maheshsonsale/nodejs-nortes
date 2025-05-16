/*
crud= create read update delete
crud with file system
make fle 
read file 
update file 
rename file 
delete file
*/

const fs= require('fs');
const path =require('path')
const dirPath=path.join(__dirname,'curd')
// const dirPath=path.join(__dirname)
const filepath=`${dirPath}/fruit.txt`

// fs.writeFileSync(filepath,'randome file content')

// ****1*****

// fs.readFile(filepath,'utf8',(err,item)=>{
//     // without utf8 =<Buffer 72 61 6e 64 6f 6d 65 20 66 69 6c 65 20 63 6f 6e 74 65 6e 74>
//     // with urf8= normal text
//     console.log(item);
// })
// ****2*****   creating file with data
// fs.writeFile('example.txt', 'Hello World!', (err) => {
//   if (err) throw err;
//   console.log('File written successfully');
// });

//***3*****

// fs.appendFile(filepath,' and this file name is random.txt',(err)=>{
//     if (!err) console.log('File is updated');   
// })

//***4****
// fs.rename(filepath,`${dirPath}/sample.txt`,(err)=>{
//     if (!err) console.log('File name is updated');   
// })

//***5**** delete
// fs.unlink('example.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted');
// });
