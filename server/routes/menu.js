const express = require('express')
const db = require('./../modules/connect-mysql')

const router = express.Router()


router.post('/addUserData/:uid', async (req, res) => {
    let output = {
      success: false,
      data: req.body,
      error: ''
    }

    const uid = +req.params.uid
    const {weight, height, goalWeight, dietType, age , bmr_val} = req.body


    const sql = "UPDATE `users` SET `weight`=?,`age`=?, `diet_type`=?, `goal_weight`=?, `height`=?,`active_status`=? WHERE `id`=? "
    const [results] = await db.query(sql, [weight || 0, age || 0, dietType, goalWeight || 0, height || 0,bmr_val || 0, uid])

    return res.json(results)
})

router.get('/getBMI/:uid', async (req, res) => {
    const uid = req.params.uid

    const sql = "SELECT `weight`, `height` FROM `users` WHERE `id`=?"
    const [rows] = await db.query(sql, [uid])
    console.log(rows)

    const height = rows[0].height/100
    const weight = rows[0].weight
    const BMI = (weight / (height * height)).toFixed(2) 
    console.log(height, weight)

    return res.json({BMI: BMI, height: height, weight: weight})
})

router.get('/getBMR/:uid', async (req, res) => {
    const uid = req.params.uid
    
    const sql = "SELECT `weight`, `height`, `age` FROM `users` WHERE `id`=?"
    const [rows] = await db.query(sql, [uid])
    console.log(rows)

    const height = rows[0].height
    const weight = rows[0].weight
    const age = rows[0].age
    const BMR = (9.99 * height + 6.25 * height - 4.92 * age ).toFixed(2) 
    console.log(height, weight)
    console.log(height, weight, age)

    return res.json({BMR: BMR, height: height, weight:weight, age:age})



})



module.exports = router