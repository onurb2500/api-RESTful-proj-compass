// Chamada das funções
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Ensinar a API a ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// Rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/api/v1', personRoutes)

app.use

// Criando a rota inicial / endpoint
app.get('/api/v1', (req, res) => {
    try {
        res.status(200).json({ message: 'Server on' })
    } catch (error) {
        res.status(500).json({ error: 'Server out' })
    }
})

// Conexão do MongoDB com a API pelo Mongoose
mongoose
    .connect(
        `mongodb+srv://onurb2500:nbal002113@apicluster.zmgnk0n.mongodb.net/bancoprojetocompass?retryWrites=true&w=majority`,
    )
    .then(() => {
        console.log("Compasso alinhado")
        app.listen(3000)
    })
    .catch((err) => console.log(err))


