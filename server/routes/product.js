const express = require('express')
const db = require('./../modules/connect-mysql')

const router = express.Router()


// --[routes]

// --[拿產品資料]
router.get('/getProduct', async (req, res) => {

    const sql = "SELECT * FROM `product_2` WHERE 1"
    const [rows] = await db.query(sql)
    console.log(rows)

    return res.json(rows)
})

// --[拿特定 id 的產品資料]
router.get('/getProduct/:pid', async (req, res) => {
    const pid = req.params.pid

    const sql = "SELECT * FROM `product_2` WHERE `product_id`=?"
    const [rows] = await db.query(sql, [pid])

    return res.json(rows)
})

//--[拿特定類別的產品資料]
router.get('/getProductbycate/:pcategory', async (req, res) => {
    const pcategory = req.params.pcategory

    const sql = "SELECT * FROM `product_2` WHERE `category_id`=?"
    const [rows] = await db.query(sql, [pcategory])

    return res.json(rows)
})



module.exports = router