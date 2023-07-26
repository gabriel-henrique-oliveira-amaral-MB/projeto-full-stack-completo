const { Router } = require("express")
const LivrosControllers = require('../Controllers/livroControllers')

const router = Router()

router
      .get('/livros', LivrosControllers.pegaTodosLivros)
      .get('/livros/:id', LivrosControllers.pegaUmLivro)
      .post('/livros', LivrosControllers.insereLivro)
      .patch('/livros/:id', LivrosControllers.atualizaLivro)
      .delete('/livros/:id', LivrosControllers.deletaLivro)

module.exports = router