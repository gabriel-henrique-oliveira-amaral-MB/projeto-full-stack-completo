const bodyParser = require('body-parser')
const livro = require('./livroRoutes')
const cors = require('cors')

module.exports = app => {
    app.use(
        bodyParser.json(),
        livro
    )
}