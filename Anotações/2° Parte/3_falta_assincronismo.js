// Faltou assincronismo

// Necessário utilizar async nos services e useEffect não lida bem com assincronismo

// // useEffect(() => {
//     fetch()
// }, [])

// async function fetch(){
//     const livrosAPI = await getLivros()
//     setLivros(livrosAPI)
// }

// Precisando liberar a política de CORS
// npm i cors
// Em app.js  do backend 
// 

// const express = require('express')
// const routes = require('./Routes')

// const app = express()
// const port = 8000
// routes(app)


// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`)
// })

// module.exports = app

// Nesse caso vamos liberar o cors para todos por ser uma aplicação de teste

// const bodyParser = require('body-parser')
// const livro = require('./livroRoutes')
// const cors = require('cors')

// module.exports = app => {
//     app.use(
//         bodyParser.json(),
//         livro,
//         cors({origin: "*"})
//     )
// }