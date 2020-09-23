const mongoose = require('mongoose')
const schema = mongoose.Schema

const couponsSchema = schema({
    startDate: Date,
    endDate: Date,
    thresholdAmount: Number,
    type: String,
    value: Number
})

const coupon = mongoose.model("coupon", couponsSchema)

module.exports = coupon