var app = angular.module("produtos", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

	$locationProvider.hashPrefix('');

	$routeProvider
	.when('/', {
		templateUrl: 'templates/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/cadastro', {
		templateUrl: 'templates/cadastro.html',
		controller: 'cadastroController'
	})
	.when('/listagem', {
		templateUrl: 'templates/listagem.html',
		controller: 'listagemController'
	})
	.otherwise({
		redirectTo: '/'
	});
});
