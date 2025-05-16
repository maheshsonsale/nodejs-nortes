const dbconnect = require('./mongodb')
const updateData =async () => {
    const data =await dbconnect();
    const result=await data.updateOne({name:'ram dev'},{$set:{college:'bhoj university'}})
    console.warn(result)
}
updateData();