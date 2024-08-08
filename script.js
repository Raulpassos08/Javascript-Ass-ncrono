// Javascript só executya um comando por vez
// Em poucas palavras, podemos olhar para o código assíncrono como um código que inicia uma tarefa agora e a termina mais tarde. Vamos elaborar sobre isso à medida que avançamos no artigo, mas antes disso, vamos aprender sobre código síncrono — a contraparte do código assíncrono.
// JavaScript, por natureza, é uma linguagem síncrona. E isso significa que JavaScript pode executar apenas um código por vez — de cima para baixo.

//  Considere o código abaixo:

console.log("logging line 1");

console.log("logging line 2");

console.log("logging line 3");

// Por padrão, o JavaScript executa o código acima de forma síncrona. E isso significa linha por linha. Então a linha 1 não pode ser executada antes da linha 2, e a linha dois não pode ser executada antes da linha 3.

//  new Promise()
// Promise é uma função construtora de promessas. Existem dois resultados possiveis de uma promessa,
// ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada e o segundo argumento for ativado.
const promessa = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve();
  } else {
    reject();
  }
});

console.log(promessa);

// then()
// O poder das Promisses está no metodo then() do seu protótipo. O Callback deste método só será
// ativado quando a promise for resolvida. O argumento do callback será o valor passsado na função resolve.
const promessa = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve("Deu certo, misera");
  } else {
    reject("ERRO");
  }
});

promessa.then((resolucao) => {
  console.log(resolucao);
});
