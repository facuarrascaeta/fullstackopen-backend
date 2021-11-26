const mongoose = require('mongoose')


const url = process.env.MONGODB_URI
mongoose.connect(url)
  .then(response => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.error(error)
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)
