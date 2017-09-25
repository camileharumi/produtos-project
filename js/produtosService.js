app.factory("produtoService",produtoService);

function produtoService(){
  var produtos = [];

  function getAll() {
    return this.produtos;
  }

  function save(produto) {
    this.produtos.push(produto);
  }

  function remove(codigo) {
    this.produtos.splice(codigo, 1);
  }

  function getByCodigo(codigoParam) {
    for(x = 0; x < this.produtos.length; x++) {
      if(this.produtos[x].codigo == codigoParam) {
        var data = this.produtos[x];
      }
    }
    return data;
  }

  return {
    getAll: getAll,
    getByCodigo: getByCodigo,
    save: save,
    remove: remove,
    produtos : [
      {codigo: 1, nome:'produto1', preco: 55, estoque: 15},
      {codigo: 2, nome:'produto2', preco: 35, estoque: 25},
      {codigo: 3, nome:'produto3', preco: 20, estoque: 50}
    ]
  }

}
// return {
//   remove : remove,
//   getAll : getAll,
//   save : save,
//   getCep:getCep,
  // produtos : [
  //   {codigo: 1, nome:'produto1', preco: 55, estoque: 15},
  //   {codigo: 2, nome:'produto2', preco: 35, estoque: 25},
  //   {codigo: 3, nome:'produto3', preco: 20, estoque: 50}
  // ]
// };



