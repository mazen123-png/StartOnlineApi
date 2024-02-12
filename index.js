const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.use(express.json())
const _PORT = "3001"

const mongoose = require('mongoose')
const url = "mongodb+srv://MazenStartOnline:WC5ZYHuccWLKmkYR@startonlineorders.xiytpaf.mongodb.net/orders"

mongoose.connect("mongodb+srv://MazenStartOnline:WC5ZYHuccWLKmkYR@startonlineorders.xiytpaf.mongodb.net/StartOnlineBusinness")
const orderModel = require('./models/order.model')

app.get('/orders',async (req,res)=>{
    
    const orders = await orderModel.find()
    res.json(orders) 
})

app.post('/makeorders',async (req,res)=>{
    
    const neworder = new orderModel(req.body)
    await neworder.save()
    res.json(req.body)
})





app.listen(_PORT,()=>console.log("server started"))



























// const mongoose = require('mongoose')
// mongoose.connect(url).then(console.log("mongodb connected succefully"))



// password: WC5ZYHuccWLKmkYR
// mongodb+srv://MazenStartOnline:WC5ZYHuccWLKmkYR@startonlineorders.xiytpaf.mongodb.net/
// const main = async () =>{
//     await client.connect()
//     console.log("connect succeffuly to the server");
//     const db = client.db("StartOnlineBusinness")
//     const collection = db.collection("orders")
// }
// main()
// 
// const {MongoClient} = require('mongodb')
// const client = new MongoClient(url)
