// Gabarito dos exercícios - Aula 01: Um botão que lembra

// ex1
let visto = false;


// ex2
// 5 === 5          => true
// "5" === 5        => false
// "5" == 5         => true
// true === false   => false


// ex3
// Causa: A variável estava no escopo global, fazendo todos os botões compartilharem o mesmo estado.
// Correção: Mover a declaração da variável para dentro da função do forEach.
document.querySelectorAll(".apoiar").forEach(function(botao) {
  let apoiado = false;
  botao.addEventListener("click", function() {
    // ...
  });
});


// ex4
if (apoiado === false) {
  botao.textContent = "Apoiado";
} else {
  botao.textContent = "Apoiar";
}


// ex5
// Mudança: Dupliquei a estrutura do cartão no HTML com o problema da escola e inseri a classe ".apoiar" no novo botão.


// ex6
// Solução: Inicializar a variável desse cartão como `let apoiado = true;`.
// Por que não serve nos outros: Os demais cartões começam desapoiados (false). Se mudar a inicialização deles para true, o primeiro clique tentará remover um apoio inexistente.