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

    function TestaCPF(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;

        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) return false;
        return true;
    }

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
        if (TestaCPF(cpf)) {
            await Person.create(person)
            res.status(201).json({ message: 'User registered sucessfully!' })
        } else {
            res.status(422).json({ error: 'Invalid CPF' })
        }
    } catch (error) {
        console.log(req);
        res.status(422).json({ error: 'Error' })
    }
})


router.get('/users', async (req, res) => {
    try {
        const people = await Person.find().select('-password')

        const page = 1
        const limit = 3

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const resultUsers = people.slice(startIndex, endIndex)

        res.status(200).json(resultUsers)
    } catch (error) {
        res.status(404).json({ error: 'User not find' })
    }
})

router.get('/users/:id', async (req, res) => {
    const id = req.params.id

    try {
        const person = await Person.findOne({ _id: id }).select('-password')
        if (!person) {
            res.status(404).json({ message: 'User not find!' })
            return
        }
        res.status(200).json(person)
    } catch (error) {
        res.status(404).json({ error: 'User not find!' })
    }
})

router.get('/users/name/:name', async (req, res) => {
    const name = req.params.name


    try {
        const person = await Person.find().select('-password')/*.filter(person => person.name.includes(name))*/
        const person2 = person.filter(perso => perso.name.includes(name))
        const page = 1
        const limit = 3

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const person3 = person2.slice(startIndex, endIndex)

        if (!person) {
            res.status(404).json({ message: 'teste 1' })
            return
        }
        res.status(200).json(person3)
    } catch (error) {
        res.status(404).json({ error: 'teste' })
    }
})

router.put('/users/:id', async (req, res) => {
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

    function TestaCPF(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;

        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) return false;
        return true;
    }
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
        if (TestaCPF(cpf)) {
            res.status(200).json({ message: 'User updated sucesfully!' })
        } else {
            res.status(422).json({ error: 'Invalid CPF' })
            return
        }
        const updatePerson = await Person.updateOne({ _id: id }, person)
        if (!updatePerson) {
            res.status(404).json({ message: 'User not find!' })
        }
    } catch (error) {
        res.status(404).json({ error: 'User not find' })
    }
})

router.delete('/users/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Person.deleteOne({ _id: id })

        const resposta = 'User removed!'
        res.status(204).send(resposta)

    } catch (error) {
        res.status(404).json({ error: 'User not find' })
    }

})



module.exports = router
