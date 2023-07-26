// Cors deve ser usado antes de qualquer rota ou no arquivo app.js mesmo antes de instaciar a rota
// Vamos criar os serviços dos livros de favoritos
// Vamos criar o serviço de favoritos em services e vamos colar a parte de get


// const fs = require("fs")

// function getTodosFavoritos() {
//     return JSON.parse( fs.readFileSync("favoritos.json") )
// }

// function deletaFavoritoPorId(id){
//     const livros = JSON.parse( fs.readFileSync("favoritos.json") )

//     const livrosFiltrados = livros.filter( livro => livro.id !== id)
//     fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
// }

// function insereFavorito(id){
//     const livros = JSON.parse( fs.readFileSync("livros.json") )

//     const favoritos = JSON.parse( fs.readFileSync("favoritos.json") )

//     const livroInserido = livros.find( livro => livro.id  === id)
//     const novaListaDeFavoritos = [...favoritos, livroInserido ]

//     fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos))
// }

// module.exports = {
//     getTodosFavoritos,
//     deletaFavoritoPorId, 
//     insereFavorito

// }

// Método de inserir no favoritos é um pouco diferente de habitual do crud