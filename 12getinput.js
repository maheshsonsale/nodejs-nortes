// console.log(process.argv[2]);   // argv = argument vector
//node getinput12.js hello world

const fs =require('fs')     
// fs stands for File System — it's a core module that allows you to work with the file system: read, write, update, delete, and more.


// const inpute=process.argv

// fs.writeFileSync(inpute[2],inpute[3])    // here the first value is file name and second is file data
//node getinput12.js new.txt  'hello this is txt file'

// if (inpute[2]=='add') {
//     fs.writeFileSync(inpute[3],inpute[4])
// }else if (inpute[2]=='remove') {
//     fs.unlinkSync(inpute[3])
// }else
//     console.log('invalid inpute');
    /*
 node getinput12.js add data.txt 'this is data content'
 node getinput12.js remove data.txt
 node getinput12.js remove new.txt 
    */