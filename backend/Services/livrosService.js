const fs = require('fs')

class LivrosServices {

    async buscaTodosOsLivros(){
        const livros = await JSON.parse( fs.readFileSync("livros.json", "utf8") )

        return livros
    }

    async buscaLivrosPorId(id) {
        const livro = await JSON.parse( fs.readFileSync("livros.json", "utf8") )
       
        if (!livro) {
            throw new Error('Livro informado não cadastrado!')
        }

        const livrosFiltrados = livro.filter(item => item.id === id);

        if (livrosFiltrados.length === 0) {
            throw new Error('Id não encontrado');
        }

        return livrosFiltrados;
    }

    async  inserirLivro(novoLivro) {
        const livro = JSON.parse(fs.readFileSync("livros.json", 'utf8'));
    
        if (!livro) {
            throw new Error('Livro informado não cadastrado!');
        }
        
        const livroExistente = livro.find(item => item.nome === novoLivro.nome);
        if (livroExistente) {
            throw new Error('Livro com esse nome já cadastrado!');
        }
    
        const maxId = livro.reduce((max, livro) => Math.max(max, Number(livro.id)), 0);
        const newId = String(maxId + 1);
    
        novoLivro = { "id": newId, "nome": novoLivro.nome };
        livro.push(novoLivro);
    
        fs.writeFileSync("livros.json", JSON.stringify(livro), 'utf8');
    }

    async atualizarLivro(id, novosAtributos){
        let livro = JSON.parse(fs.readFileSync("livros.json", 'utf8'));

        if (!livro) {
            throw new Error('Livro informado não cadastrado!');
        }

        const livroExistente = livro.find(item => item.id === id);
        if (!livroExistente) {
            throw new Error('Livro com esse ID não encontrado!');
        }
    
        const indiceLivro = livro.findIndex(item => item.id === id);
        livro[indiceLivro] = { ...livroExistente, ...novosAtributos };
    
        fs.writeFileSync("livros.json", JSON.stringify(livro), 'utf8');
    }

    async  deletarLivroPorId(id) {
        const livro = JSON.parse(fs.readFileSync("livros.json", 'utf8'));
    
        if (!livro) {
            throw new Error('Livro informado não cadastrado!');
        }

        const livroExistente = livro.find(item => item.id === id);
        if (!livroExistente) {
            throw new Error('Livro com esse ID não encontrado!');
        }
    
        const indiceLivro = livro.findIndex(item => item.id === id);
        livro.splice(indiceLivro, 1);
    
        fs.writeFileSync("livros.json", JSON.stringify(livro), 'utf8');
    }

}

module.exports = LivrosServices




// Essa expressão usa o método reduce de arrays para encontrar o maior valor do atributo id na lista de livros (livro). O método reduce é uma função de alto nível que permite reduzir todos os elementos de um array a um único valor, aplicando uma função de redução a cada elemento.

// Aqui está o que a expressão faz em detalhes:

// livro.reduce(...): Inicia o método reduce no array livro. Esse método itera por todos os elementos do array, aplicando uma função de redução a cada elemento.

// (max, livro) => ...: A função de redução é definida usando uma função de seta (arrow function) com dois parâmetros: max e livro. max é o acumulador que armazena o valor atual do maior id encontrado até o momento, e livro é o elemento atual do array sendo iterado.

// Math.max(max, Number(livro.id)): A função de redução compara o valor atual do maior id (max) com o id do livro atual, convertendo o id do livro para um número usando Number(livro.id). A função Math.max retorna o maior valor entre os dois.

// , 0: O segundo argumento de reduce, 0, é o valor inicial do acumulador max. Neste caso, começamos com max igual a 0.

// O reduce percorre todos os elementos da lista de livros, aplicando a função de redução para encontrar o maior valor do atributo id. No final do processo, o valor de maxId será o maior id encontrado na lista de livros.

// Essa expressão é útil para encontrar o maior ID existente nos livros e, em seguida, incrementá-lo em 1 para obter o próximo ID disponível ao adicionar um novo livro. Isso garante que cada novo livro receba um ID único e incremental na lista.