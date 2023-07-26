// Precisamos modificar o componente de pesquisa
// No index a única coisa que precisa mudar é a fonte dos dados 
// Vamos precisar de mais um estado para guardar os livros
// Livros precisam ser setados no momento que a página abrir e para isso precisamos usar o use effect
// Use effect possui 2 parãmetros sendo o primeiro a função que iremos passar e o segundo o objeto que será recarregado após a função
// Agora os livros serão recarregados
// useEffect(() => {
//     const livrosAPI = getLivros()
//     setLivros(livrosAPI)
// }, [livros])
