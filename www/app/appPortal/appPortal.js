var mainApp = angular.module("MainApp");

mainApp.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/appPortal/Portal");

	$stateProvider
		.state('appPortal.UsuarioCadastro', {
			url: "/UsuarioCadastro",
			templateUrl: "app/appPortal/views/UsuarioCadastro.html",
			controller: 'UsuarioCadastroCtrl'
		})
		.state('appPortal.Portal', {
			url: "/Portal",
			templateUrl: "app/appPortal/views/Portal.html",
			controller: 'PortalCtrl'
		})

});


mainApp.controller('appPortalCtrl', ['$scope', 'metodosAux', '$http', '$localStorage', '$state', '$window', 'ClienteService', 'PrestadorService', function($scope, metodosAux, $http, $localStorage, $state, $window, ClienteService, PrestadorService) {


}]);