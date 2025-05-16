/*
****to insert data*****
by command:
"use dataname" it's command eg : use youtube 
you will go inside the youtube dir
===inside folder youtube we have to insert data in file which name is products
"db.products.insertOne({name:"samsung",age:24,price:240$,category:"mobiles"})"

to check inserted data by command
db.products.find()

to update data by command
db.products.updateOne({name:"mahesh"},{$set:{age:10}})

to delete
db.products.deleteOne({sex:"female"})
*/