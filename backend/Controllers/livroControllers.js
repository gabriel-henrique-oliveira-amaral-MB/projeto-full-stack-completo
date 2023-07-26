const LivrosServices = require('../Services/livrosService')
const livrosServices = new LivrosServices()

class LivrosControllers {

     static async pegaTodosLivros(req, res) {
          try {
               const livros = await livrosServices.buscaTodosOsLivros()
               res.status(200).send(livros)
          } catch (error) {
               console.log('Message error: ', error.message)
               res.status(400).send({ message: error.message })
          }
     }

     static async pegaUmLivro(req, res) {
          try {
               const { id } = req.params
               if (id && Number(id)) {
                    const livros = await livrosServices.buscaLivrosPorId(id)
                    res.status(200).send(livros)
               }
               else {
                    res.status(422).send({ message: `Id inválido` })
               }
          } catch (error) {
               console.log('Message error: ', error.message)
               res.status(400).send({ message: error.message })
          }
     }

     static async insereLivro(req, res) {
          const novoLivro = req.body
          try {
               if(req.body.nome) {
                    const livros = await livrosServices.inserirLivro(novoLivro)
                    res.status(201).send(livros)
               } else {
                    res.status(422).send({ message: "O campo nome é obrigatório" })
               }
          } catch (error) {
               console.log('Message error: ', error.message)
               res.status(400).send({ message: error.message })
          }
     }

     static async atualizaLivro(req, res) {
          const atualizacao = req.body
          try {
               const { id } = req.params
               if (id && Number(id)) {
                    const livros = await livrosServices.atualizarLivro(id, atualizacao)
                    res.status(200).send(livros)
               } else {
                    res.status(422).send({ message: `Id inválido` })
               }
          } catch (error) {
               console.log('Message error: ', error.message)
               res.status(400).send({ message: error.message })
          }
     }

     static async deletaLivro(req, res) {
          try {
               const { id } = req.params
               if (id && Number(id)) {
                    await livrosServices.deletarLivroPorId(id)
                    res.status(200).send({ message: `Livro de ID: ${id} deletado com sucesso!` })
               } else {
                    res.status(422).send({ message: `Id inválido` })
               }
          } catch (error) {
               console.log('Message error: ', error.message)
               res.status(400).send({ message: error.message })
          }
     }

}

module.exports = LivrosControllers


