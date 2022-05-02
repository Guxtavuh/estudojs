function mensagem() {
  console.log("olá eu venho de um módulo");
}

function data() {
  console.log(new Date().toLocaleDateString());
}
export function soma(n1, n2) {
  console.log(n1 + n2);
}
export { mensagem };
export { data };
