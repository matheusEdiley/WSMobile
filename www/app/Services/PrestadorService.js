var mainApp = angular.module("MainApp");

mainApp.service('PrestadorService', function($http, autenticar) {

	this.addPrestador = function(cliente) {
		return $http.post('https://appworksquad.herokuapp.com/app/prestador/', cliente);
	}

	this.searchPrestador = function(user) {
		return $http.get('https://appworksquad.herokuapp.com/app/prestador/' + user._id);
	}

	this.allPrestador = function() {
		return $http.get('https://appworksquad.herokuapp.com/app/prestador/undefined');
	}
});