function verificarcpf() {
  var cpfUsuario = document.getElementById("cpf").value;
  var cpfCalc = cpfUsuario.substring(0, 9);
  /* o comando substring permite quebrar (divir em caracteres) assim vc consegue pegar quantos carcteres quiser, no caso acima pegamos
   do 0 ao 9 temos ent os 9 primeiros digitos do cpf */
  console.log(cpfCalc);
  var peso10 = 10;
  var pesso11 = 11;
  var resultado = 0;
  var resto = 0;
  for (var i = 0; i < 9; i++) {
    resultado += cpfCalc[i] * peso10;
    peso10--;
  }
  console.log(resultado);
  resto = resultado % 11;
  if (resto < 2) {
    cpfCalc += 0;
  } else {
    cpfCalc += 11 - resto;
  }
  resultado = 0;
  for (i = 0; i < 10; i++) {
    resultado += cpfCalc[i] * pesso11;
    pesso11--;
  }
  resto = resultado % 11;

  if (resto < 2) {
    cpfCalc += 0;
  } else {
    cpfCalc += 11 - resto;
  }

  if (cpfCalc != cpfUsuario) {
    alert("CPF Invalido");
  } else {
    alert("CPF Valido");
  }
}
