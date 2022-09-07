const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    name: String, required: true,
    cpf: String, required: true,
    birthDate: Number, required: true,
    email: String, required: true,
    password: Number, required: true,
    address: String, required: true,
    number: Number, required: true,
    complement: String, required: true,
    city: String, required: true,
    state: String, required: true,
    country: String, required: true,
    zipCode: Number, required: true,
})

module.exports = Person