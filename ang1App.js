	var myApp=angular.module("myApp",["ui.router"]);
	myApp.config(["$stateProvider","$locationProvider","$urlRouterProvider",function($stateProvider,$locationProvider,$urlRouterProvider){
		$stateProvider
		.state('main',{
			url:"/main",
			templateUrl:"ang1main.html",
			controller:"MainController"
		})
		.state("user",{
			url:"/user/:username",
			templateUrl:"ang1UserDetail.html",
			controller:"UserController"
		})
		.state("repos",{
			url:"/repos/:username/:reponame",
			templateUrl:"ang1repo.html",
			controller:"RepoController"
		})
		$urlRouterProvider.otherwise('/main')
		// .state("otherwise",{
		// 	url:'*path',
		// 	templateUrl:"ang1main.html",
		// 	controller:"MainController"
		// })
		$locationProvider.html5Mode(true);
	}])
// .when("/main",{
			
// 		})