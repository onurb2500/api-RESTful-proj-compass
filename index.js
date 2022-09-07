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

// Conexão do MongoDB com a API pelo Mongoose
mongoose
    .connect(
        `mongodb + srv://onurb2500:nbal002113@apicluster.zmgnk0n.mongodb.net/bancoprojetocompass?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Compasso alinhado")
        app.listen(3000)
    })
    .catch((err) => console.log(err))
