const express = require('express');
const router = express.Router();

const coupon = require('../database/models/coupons')


// router.get('/api', async (req, res) => {
//
//     const startDate = new Date()
//     const Coupon = new coupon({
//         startDate: startDate.getTime(),
//         endDate: startDate.setDate(new Date().getDate()+1),
//         thresholdAmount: 2000,
//         type: "percentage",
//         value: 10
//     })
//
//     await Coupon.save().then(() => {console.log('saved')}).catch()
//     const values = await coupon.find()
//     res.send(values)
// })
//
// router.get('/getCoupon', async (req, res) => {
//
// })

module.exports = router