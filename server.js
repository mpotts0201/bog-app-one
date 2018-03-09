require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const creatureController = require('./controllers/creatureController')

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI)

//logging info about db
const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Mongoose connected successfully')
})

connection.on('error', (err) => {
    console.log('Mongoose error: ', err)
})

//apply middleware

app.use(bodyParser.json())
app.use(express.static(`${__dirname}/client/build`))


//set up routes 
app.use('/api/creatures', creatureController)


app.get('/', (req, res) => {
    res.send("Slam bam thank you Cam")
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log("Listening on PORT " + PORT)
})