/*
   OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
       PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
       PASSO 2 - Identificar o evento de clique no elemento da listagem
       PASSO 3 - remover a classe aberto só do cartão que tá aberto
       PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
       PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
       PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
*/

// PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoCavaleiros = document.querySelectorAll('.knight');
console.log(listaSelecaoCavaleiros);

listaSelecaoCavaleiros.forEach(knight => {
  knight.addEventListener("click", () => {
    const cartaoCavaleiroAberto = document.querySelector('.aberto');
    cartaoCavaleiroAberto.classList.remove('aberto');

    const idCavaleiroSelecionado = knight.attributes.id.value;

    const idDoCartaoCavaleiroParaAbrir = "cartao-" + idCavaleiroSelecionado;
    const cartaoCavaleiroParaAbrir = document.getElementById(idDoCartaoCavaleiroParaAbrir);
    cartaoCavaleiroParaAbrir.classList.add('aberto');


  })
})