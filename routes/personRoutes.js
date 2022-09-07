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
        res.status(201).json({ message: 'User registered sucessfully!' })
    } catch (error) {
        console.log(req);
        res.status(422).json({ error: 'Error' })
    }
})

router.get('/users', async (req, res) => {
    try {
        const people = await Person.find()

        res.status(200).json(people)
    } catch (error) {
        res.status(404).json({ error: 'User not find' })
    }
})

router.get('/users/:id', async (req, res) => {
    const id = req.params.id

    try {
        const person = await Person.findOne({ _id: id })
        res.status(200).json(person)
    } catch (error) {
        res.status(404).json({ error: 'User not find' })
    }
})

router.patch('/users/:id', async (req, res) => {
    const id = req.params.id

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
        const updatePerson = await Person.updateOne({ _id: id, person})
    } catch (error) {
        res.status(404).json({ error: 'User not find' })
    }
})



module.exports = router
