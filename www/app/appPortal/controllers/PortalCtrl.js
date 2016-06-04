'use strict';


(function() {
	var mainApp = angular.module("MainApp");

	var PortalCtrl = function($scope, metodosAux, $http, $localStorage, $state, $window, ClienteService, PrestadorService) {


		var onError = function(error) {
			$scope.error = error.data;
		};

		var onCadastroLocalizado = function(callback) {

			$state.go("appAdmin.Main");

		};

		var onLoginRealizado = function(callback) {


			$window.sessionStorage.setItem('usuario', angular.toJson(callback.data.user));
			$window.sessionStorage.setItem('token', callback.data.token);

			if (callback.	data.user.tipo == "Cliente") {
				ClienteService.searchCliente(callback.data.user)
					.then(onCadastroLocalizado, onError);
			} else if (callback.data.user.tipo == "Prestador") {
				PrestadorService.searchPrestador(callback.data.user)
					.then(onCadastroLocalizado, onError);
			} else {
				$state.go("appAdmin.AdmGerenUsu");
			}
		};

		$scope.FazerLogin = function(usu) {

			usu.senha = CryptoJS.SHA1(usu.senha).toString();

			$http.post('https://appworksquad.herokuapp.com/login', usu)
				.then(onLoginRealizado, onError).header("Access-Control-Allow-Origin: *");

		};


	}
	mainApp.controller('PortalCtrl', PortalCtrl);
}());