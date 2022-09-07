const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        cpf: {type: String, required: true},
        birthDate: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        address: {type: String, required: true},
        number: {type: Number, required: true},
        complement: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        country: {type: String, required: true},
        zipCode: {type: Number, required: true},
    })

const Person = mongoose.model('Person', PersonSchema)

module.exports = Person