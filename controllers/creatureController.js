const express = require('express')
const router = express.Router({ mergeParams: true })
const { Creature } = require('../db/schema')


router.get('/', (req, res) => {
    Creature.find().then((creatures) => {
        res.send(creatures)
    }).catch((err) => {
        console.log(err)
    })
})





module.exports = router 