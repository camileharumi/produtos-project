app.controller("listagemController", listagemController);

function listagemController($scope, produtoService) {
	$scope.produtos = [];

	function listar() {
		$scope.produtos =  produtoService.getAll();
		console.log($scope.produtos);
	}

	$scope.efetuarVenda = function(codigo) {
		let produto = produtoService.getByCodigo(codigo);
		produto.estoque--;

		if(produto.codigo >= 0) {
			$scope.produtos[produto.codigo] = produto;
		} else {
			produtoService.save(produto);
		}		
	}

	$scope.efetuarCompra = function(codigo) {
		let produto = produtoService.getByCodigo(codigo);
		produto.estoque++;

		if(produto.codigo >= 0) {
			$scope.produtos[produto.codigo] = produto;
		} else {
			produtoService.save(produto);
		}		
	}

	listar();
}