/* função  anonima é uma função que nao tem nome, ela é atribuida a um elemento de evento ou a uma variavel,
os elementos de evento pode ser botões imagens e varios constroles htmls
*/
const body = document.body;
// vamos criar um botão para adicionar a pagina
const btn1 = document.createElement("button");

btn1.innerHTML = "Primeira função";
// adicionar o btn1 a página html, adição feita ao body
body.appendChild(btn1);

// aplicar uma função ao botao btn1
btn1.onclick = function () {
  //capturar a url da pagina
  var url = window.location;
  window.document.title = "trocou o titulo";
  alert("trocamos o titulo da página " + url);
};

//criar um novo botão btn2

const btn2 = document.createElement("button");

btn2.innerHTML = "Segunda função";

//adicionar btn2 ao boddy

body.appendChild(btn2);
btn2.onclick = () => [(document.body.style.backgroundColor = "green")];

//vamos criar uma matriz com produtos

const produtos = [
  ["Produto ", "Quantidade ", "Preço "],
  ["Calça ", "15", "R$ 150,00"],
  ["Blusa ", "34", "R$ 400,00"],
  ["Cinto Hermes ", "3", "R$ 5670,00"],
];

function montartabela() {
  const div = document.createElement("div");
  var tabela = "<table>";

  for (var linha = 0; linha <= 3; linha++) {
    tabela += "<tr>";

    for (var coluna = 0; coluna <= 2; coluna++) {
      if (linha == 0) {
        tabela += `<th>${produtos[linha][coluna]}</th>`;
      } else {
        tabela += `<td> ${produtos[linha][coluna]}</td>`;
      }
    }
    tabela += "</tr>";
  }
  tabela += "</table>";
  div.innerHTML = tabela;
  body.appendChild(div);
}

const btn3 = document.createElement("button");
btn3.innerHTML = "Terceira função";
body.appendChild(btn3);
btn3.onclick = montartabela;

const btn4 = document.createElement("button");
btn4.innerHTML = "Quarta função";
btn4.onclick = () => {
  //Vamos usar um iterador chamado foreach ele esta presente no array

  produtos.forEach(function (produto, index) {
    console.log(`item da linha ${index} -> ${produto}`);
  });
};
body.appendChild(btn4);
const btn5 = document.createElement("button");
btn5.innerHTML = "Quinta função";
btn5.onclick = () => {
  produtos.forEach((produto, index) => {
    produto.forEach((item, ix) => {
      console.log(`linha ${index} e coluna ${ix} -> ${item}`);
    });
  });
};
body.appendChild(btn5);
