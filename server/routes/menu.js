const express = require('express')
const db = require('./../modules/connect-mysql')

const router = express.Router()


// router.get('/data', async (req, res) => {
//   // 'http://localhost:8080/menu/data'

//   const sql = "SELECT * FROM `products_category` WHERE 1";
//   const [rows] = await db.query(sql)
  
//   return res.json(rows)
// })



module.exports = router