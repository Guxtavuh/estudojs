class produto {
  constructor(nome, preco, descricao) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
  }
}

function cadastro(produto) {
  console.log(`cadastramos o produto ${produto.nome}`);
  console.log(`O preço desse prduto é ${produto.preco}`);
}
module.exports = { produto, cadastro };
