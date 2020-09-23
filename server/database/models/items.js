const mongoose = require('mongoose')
const schema = mongoose.Schema

const itemsSchema = schema({
    name: String,
    desc: String,
    price: Number
})

module.exports = mongoose.model("items", itemsSchema)