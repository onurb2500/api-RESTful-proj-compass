const router = require('express').Router()
const Person = require('../models/Person')

// Rota para incluir novo cadastro

router.post('/users', async (req, res) => {

    const {
        name,
        cpf,
        birthDate,
        email,
        password,
        address,
        number,
        complement,
        city,
        state,
        country,
        zipCode
    } = req.body
    
    const person = {
        name,
        cpf,
        birthDate,
        email,
        password,
        address,
        number,
        complement,
        city,
        state,
        country,
        zipCode
    }
    try {
        await Person.create(person)
        res.status(201).json({message: 'User registered sucessfully!'})
    } catch (error) {
        console.log(req);
        res.status(422).json({ error: 'Error' })
    }
})

module.exports = router
