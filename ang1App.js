	var myApp=angular.module("myApp",["ngRoute"]);
	myApp.config(["$routeProvider",function($routeProvider){
		$routeProvider
		.when("/main",{
			templateUrl:"ang1main.html",
			controller:"MainController"
		})
		.when("/user/:username",{
			templateUrl:"ang1UserDetail.html",
			controller:"UserController"
		})
		.when("/repos/:username/:reponame",{
			templateUrl:"ang1repo.html",
			controller:"RepoController"
		})
		.otherwise({redirectTo:"/main"})
	}])
