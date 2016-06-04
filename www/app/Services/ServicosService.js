var mainApp = angular.module("MainApp");

mainApp.service('ServicosService', function($http, autenticar) {

	this.addService = function(servico) {
		return $http.post('https://appworksquad.herokuapp.com/app/servico/', servico);
	}

	this.searchService = function(id) {
		return $http.get('https://appworksquad.herokuapp.com/app/servico?id=' + id);
	}

	this.pesquisarServ = function(cod, tipo) {
		return $http.get('https://appworksquad.herokuapp.com/app/servicosFiltro?' + tipo + '=' + cod);
	}

	this.allServices = function() {
		return $http.get('https://appworksquad.herokuapp.com/app/servico/', undefined);
	}

	this.addServicePrest = function(prestador) {
		return $http.post('https://appworksquad.herokuapp.com/app/prestador/servico/', prestador);
	}

});