require('dotenv').config()
const mongoose = require('mongoose')
const { Creature } = require('./schema')



const yoda = new Creature({
    name: "Yoda",
    description: "Very old, very green, very short, he is"
})


mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

const saved = async () => {
  await Creature.remove()
  const luke = new Creature({name: 'Luke', description: 'Jedi'})
  await luke.save()
  const darth = new Creature({name: 'Darth Vader', description: 'Father of Luke'})
  await darth.save()
  await yoda.save()
  console.log("Save successful")
  db.close()
}

saved()