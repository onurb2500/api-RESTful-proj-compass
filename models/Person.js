const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        cpf: {type: String, minlength: 11, maxlength: 11, required: true},
        birthDate: {type: Date, max:'09/08/2004', required: true},
        email: {type: String, validate:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,required:true},
        password: {type: String, minlength: 6, required: true},
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