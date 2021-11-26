const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
}

const password = process.argv[2]
const url = `mongodb+srv://facu:${password}@cluster0.m9xra.mongodb.net/phonebook-app?retryWrites=true&w=majority`
const  name = process.argv[3]
const number = process.argv[4]

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (name && number) {
  const person = new Person({
    name,
    number
  })

  person.save().then(() => {
    console.log(`Added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  Person.find({}).then(response => {
    console.log('phonebook:')
    response.forEach(person => {
      console.log(`${person.name} ${person.number}`)
      mongoose.connection.close()
    })
  })
}






