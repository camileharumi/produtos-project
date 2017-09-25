app.controller("cadastroController", cadastroController);

function cadastroController($scope, produtoService, $location) {
	
	$scope.salvar = function(produto) {
		produtoService.save(produto);
		$location.path('/listagem');
	}
}