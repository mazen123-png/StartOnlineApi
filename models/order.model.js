const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    address: {
        type: String,
        required: true
    },
    governorate: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    telephone: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    shipping: {
        type: Number,
        required: true
    },
    commission: {
        type: Number,
        required: true
    },
    date:{
        type:String,
        required:true
    },
    comments: {
        type: String,
        required: true
    }
})
const orderModel = mongoose.model('Order',orderSchema)
module.exports = orderModel