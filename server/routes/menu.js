const express = require('express')
const db = require('./../modules/connect-mysql')

const router = express.Router()


router.post('/addUserData/:uid', async (req, res) => {
    let output = {
      success: false,
      data: req.body,
      error: ''
    }

    const uid = req.params.uid
    const {weight, height, goalWeight, dietType, age} = req.body


    const sql = "UPDATE `users` SET `weight`=?,`age`=?, `diet_type`=?, `goal_weight`=?, `height`=? WHERE `id`=?"
    const [results] = await db.query(sql, [weight, age, dietType, goalWeight, height, uid])

    return res.json(results)
})



module.exports = router