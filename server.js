require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')






app.get('/', (req, res) => {
    res.send("Hello World")
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log("Listening on PORT " + PORT)
})