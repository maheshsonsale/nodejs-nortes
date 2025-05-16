const fs=require('fs')
const path=require('path')
const dirPath=path.join(__dirname,'files')      // for this make a folder name files
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+`/hello${i}.txt`,`random data ${i}`)
// }
// console.log(dirPath);
 

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log(item);
        
    })
})
/*
The outpute will  be
PS E:\mahesh\nodejs> node filelist13.js
hello0.txt
hello1.txt
hello2.txt
hello3.txt
hello4.txt
*/