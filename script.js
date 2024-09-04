// Javascript só executya um comando por vez
// Em poucas palavras, podemos olhar para o código assíncrono como um código que inicia uma tarefa agora e a termina mais tarde. Vamos elaborar sobre isso à medida que avançamos no artigo, mas antes disso, vamos aprender sobre código síncrono — a contraparte do código assíncrono.
// JavaScript, por natureza, é uma linguagem síncrona. E isso significa que JavaScript pode executar apenas um código por vez — de cima para baixo.

//   Considere o código abaixo:

// console.log("logging line 1");

// console.log("logging line 2");

// console.log("logging line 3");

// // Por padrão, o JavaScript executa o código acima de forma síncrona. E isso significa linha por linha. Então a linha 1 não pode ser executada antes da linha 2, e a linha dois não pode ser executada antes da linha 3.

// //  new Promise()
// // Promise é uma função construtora de promessas. Existem dois resultados possiveis de uma promessa,
// // ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada e o segundo argumento for ativado.
// const promessa = new Promise(function (resolve, reject) {
//   let condicao = true;
//   if (condicao) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// console.log(promessa);

// then()
// O poder das Promisses está no metodo then() do seu protótipo. O Callback deste método só será
// ativado quando a promise for resolvida. O argumento do callback será o valor passsado na função resolve.
// const promessa = new Promise(function (resolve, reject) {
//   let condicao = true;
//   if (condicao) {
//     resolve("Deu certo, misera");
//   } else {
//     reject("ERRO");
//   }
// });

// promessa.then((resolucao) => {
//   console.log(resolucao);
// });

// // Assíncrono
// // As promises não fazem sentido quando o código executado dentro da mesma é apenas código sincrono.
// // O poder está na execução de código assincrono que executara o resolve() ao final dele.
// const promessa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve("Resolvida");
//     }, 9000);
//   } else {
//     reject("Erro");
//   }
// });
// console.log("careca");
// promessa.then((resolucao) => {
//   console.log(resolucao);
// });

// // then().then()
// // O metodo then() retorna outra Promise. Podemos colocar then() após then()
// // e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then,
// // será o valor do retorno anterior.
// const promessa = new Promise((resolve, reject) => {
//   resolve("Etapa 1");
// });
// promessa
//   .then((resolucao) => {
//     console.log(resolucao);
//     return "Etapa 2";
//   })
//   .then((resolucao) => {
//     console.log(resolucao);
//     return "Etapa 3";
//   })
//   .then((r) => r + 4)
//   .then((r) => {
//     console.log(r);
//   });

// // catch()
// // O método catch(), do prototopo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada.
// const promessa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if (condicao) {
//     resolve("Estou pronto!");
//   } else {
//     reject("Erro");
//   }
// });

// promessa
//   .then((resolucao) => {
//     console.log(resolucao);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });

// // then(resolve, reject)
// // Podemos passar a função que será ativada caso a promise seja rejeitada, FileSystemDirectoryEntryno metodo then, como segundo argumento.

// const promessa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if (condicao) {
//     resolve("Estou pronto!");
//   } else {
//     reject("Erro");
//   }
// });

// promessa.then((resolucao) => {
//   console.log(resolucao);
// }),
//   (reject) => {
//     console.log(reject);
//   };

// // finally()

// const promessa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if (condicao) {
//     resolve("Estou pronto!");
//   } else {
//     reject("Erro");
//   }
// });

// promessa
//   .then(
//     (resolucao) => {
//       console.log(resolucao);
//     },
//     (reject) => {
//       console.log(reject);
//     }
//   )
//   .finally((teste) => {
//     console.log(teste);
//   });

// // Fetch API
// // Permite fazermos requisições HTTP através do metodo fetch().
// // Este metodo retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response
// const doc = fetch("https://viacep.com.br/ws/60530540/json/");

// doc
//   .then((resolucao) => {
//     return resolucao.text();
//   })
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body;
//     console.log(body);
//   });

// // .blob()
// // Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado
// // para transformarmos requisições de imagens por exemplo. O blob gera um URL único
// const div = document.createElement("div");

// fetch("./imagem.png")
//   .then((response) => response.blob())
//   .then((imgBlob) => {
//     const blobUrl = URL.createObjectURL(imgBlob);
//     console.log(blobUrl);
//   });


// const cepInput = document.getElementById('cep')
// const btnCep = document.getElementById('btnCep')
// const resultadoCep = document.querySelector('.resultadoCep');

// btnCep.addEventListener('click', handleClick)

// function handleClick(event){
//   event.preventDefault();
//   const cep = cepInput.value
//   if (cep === "") {
//     alert("Por favor, insira um CEP válido.");
//     return;
//   }
//   buscaCep(cep)
// }

// function buscaCep(cep){
//   fetch(`https://viacep.com.br/ws/${cep}/json/`)
//   .then(response => response.text())
//   .then(body => {
//     resultadoCep.innerText = body
//   })
//   .catch(error => {
//     console.error('Erro ao buscar o CEP:', error);
//     resultadoCep.innerText = 'Erro ao buscar o CEP';
//   });
// }

// // JSON
// // Javascript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de chave e valor. As aspas 
// // duplas são obrigatorias, tanto na chave quanto novalor quando este for uma String.
// {
//   "id": 1,
//   "nome": "Raul",
//   "email": "raulpassos08@gmail.com"
// }

// Function Expression 
// È criada a partir da declaração de uma variável, na qual assinalamos uma função. Esta função pode ser anonima 
// ou nomeada.
// const somar = (a, b) => a + b
// const multiplicação = (a, b) => a * b

// alert(somar(7,3))
// alert(multiplicação(7,3))

// Destructuring 
// Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades a novas variaveis.

// const carro = {
//     marca: 'Honda',
//     Ano: 2018,
//     Cor: 'Vermelho'
// }

// const {marca, Ano, Cor} = carro

// console.log(marca)
// console.log(Ano)
// console.log(Cor)

const times = {
    nome: 'Real Madrid',
    elenco: {
        goleiros: ['Lunin', 'Courtois']
    }
}

const {goleiros} = times.elenco
console.log(goleiros)