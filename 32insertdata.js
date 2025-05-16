const dbconnect=require('./mongodb')

const insert=async()=>{
    const db=await dbconnect();
    const result =db.insertOne(
        {name:'pravin',age:24,sex:"male",city:"bhopal",Rollno:105}
    )
}
insert()