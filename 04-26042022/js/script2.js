function array1() {
  var nomes = ["paulo", "helena", "vanessa"];
  for (var i = 0; i < nomes.length; i++) {}

  /* adicionando um nome */
  nomes.push("Guilherme");

  /* removendo um nome */

  nomes.pop();
  /* remover primeiro elemento */

  nomes.shift();
  console.log(nomes);

  /* adicionar o primeiro elemento no awway */
  nomes.unshift("sophia");
  nomes.push("gabriela");
  console.log(nomes);
  /* vamos criar uma matrix com nomes e idade */
  var dados = [
    ["Nome", "idade"],
    ["Raul", "18"],
    ["cauam", "78"],
    ["hiago", "32"],
  ];
  console.log(dados);
}
