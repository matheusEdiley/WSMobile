var mainApp = angular.module("MainApp");

mainApp.factory('menu', [function() {

	return {
		//teste: teste,
		CriarMenu: function(tipo) {
			var menu = [];
			if (tipo == "Cliente") {

				menu = [{
					"Nome": "Cadastro",
					"Link": "appAdmin.ClienteCadastro",
					"Icone": "floppy-disk"
				}, {
					"Nome": "Meus dados",
					"Link": "appAdmin.Main",
					"Icone": "list-alt"
				}, {
					"Nome": "Serviços",
					"Link": "appAdmin.ClienteServ",
					"Icone": "tasks"
				}];
			} else if (tipo == "Prestador") {
				menu = [{
					"Nome": "Cadastro",
					"Link": "appAdmin.PrestadorCadastro.InfoPessoais",
					"Icone": "floppy-disk"
				}, {
					"Nome": "Meus dados",
					"Link": "appAdmin.Main",
					"Icone": "list-alt"
				}, {
					"Nome": "Cadastro de serviços",
					"Link": "appAdmin.PrestadorCadServ",
					"Icone": "wrench"
				}];
			} else {
				menu = [{
					"Nome": "Gerência de usuários",
					"Link": "appAdmin.AdmGerenUsu"
				}];
			}

			return menu;
		}
	};
}]);