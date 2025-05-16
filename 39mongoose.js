/*
waht is mongoose 
mongoose vs mongodb package
install mongoose
what is schemas
what is model
connect nodejs ,mongodb with mongoose
*/
const mongoose=require("mongoose")

const main =async () => {
    await mongoose.connect("mongodb://localhost:27017/instagram");
    const productSch=new mongoose.Schema({
        name:String,
        price:Number
    })
// hamare data ke undar jitni fields hai unko schemas kehte hai  for validation
// model un schemas ka use karke nodejs or mongodb ko connect karta hai
    const productModel=mongoose.model('logindata',productSch)

    let data = new productModel({name:"ravan",price:450})
    let result = await data.save()
    console.log(result);
    
}
main()