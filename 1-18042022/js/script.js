// janela de alerta criada em js
// alert("olá seja bem vindo")
// Vamos solicitar ao usuario que entre com seu nome, usaremos o prompt associado a uma variavel
// var nome ="";
// nome = prompt("Digite o seu nome")
// alert(nome.toUpperCase());



// Calcular as 5 operações aritiméticas

var numero1 = prompt("Digite um número")
var numero2 = prompt("Digite outro número")

var soma = parseInt (numero1) + parseInt (numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

console.log (
            "Os resultados são \n\n" +
            "soma: " + soma+ 
            "\n subtração: " + subtrair+
            "\n multiplicacão: " + multiplicar+
            "\n divisão: " + dividir+
            "\n resto: " + resto

)