// janela de alerta criada em js

function bemvindo() {
  alert("olá seja bem vindo");
}

// Vamos solicitar ao usuario que entre com seu nome, usaremos o prompt associado a uma variavel

function nome() {
  var nome = "";
  nome = prompt("Digite o seu nome");
  alert(nome.toUpperCase());
}

// Calcular as 5 operações aritiméticas
function operacoes() {
  var numero1 = prompt("Digite um número");
  var numero2 = prompt("Digite outro número");

  var soma = parseInt(numero1) + parseInt(numero2);
  var subtrair = numero1 - numero2;
  var multiplicar = numero1 * numero2;
  var dividir = numero1 / numero2;
  var resto = numero1 % numero2;

  document.getElementsByTagName("div")[2].innerHTML =
    "Os resultados são \n\n" +
    "soma: " +
    soma +
    "<br> subtração: " +
    subtrair +
    "<br> multiplicacão: " +
    multiplicar +
    "<br> divisão: " +
    dividir +
    "<br> resto: " +
    resto;
}

function operacoescomdiv() {
  {
    var numero1 = prompt("Digite um número");
    var numero2 = prompt("Digite outro número");

    var soma = parseInt(numero1) + parseInt(numero2);
    var subtrair = numero1 - numero2;
    var multiplicar = numero1 * numero2;
    var dividir = numero1 / numero2;
    var resto = numero1 % numero2;

    for (var i = 0; i <= 2; i++) {
      document.getElementsByTagName("div")[i].innerHTML =
        "Os resultados são \n\n" +
        "soma: " +
        soma +
        "<br> subtração: " +
        subtrair +
        "<br> multiplicacão: " +
        multiplicar +
        "<br> divisão: " +
        dividir +
        "<br> resto: " +
        resto;
      document.getElementsByTagName("div")[i].style.padding = "30px";
      document.getElementsByTagName("div")[i].style.backgroundColor =
        "rgb(" + 200 * i + ",200,100)";
      document.getElementsByTagName("div")[i].style.margin = "20px";
    }
  }
}

function tamanhodiv() {
  document.getElementsByTagName("div")[0].style.width = "50%";
  document.getElementsByTagName("div")[0].style.transition = "ease 0.5s";
}

function tamanhodiv1() {
  document.getElementsByTagName("div")[0].style.width = "100%";
}
