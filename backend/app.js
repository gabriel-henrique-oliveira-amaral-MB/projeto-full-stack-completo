const express = require('express')
const routes = require('./Routes')
const cors = require('cors')
const app = express()
const port = 8000
app.use(cors({origin:"*"}))
routes(app)


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

module.exports = app