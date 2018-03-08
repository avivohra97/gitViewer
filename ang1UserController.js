var myApp=angular.module("myApp");
myApp.controller("UserController",["$scope","$http","$interval",
	"$location","$anchorScroll","$routeParams",function($scope,$http,$interval,$location,$anchorScroll,$routeParams){
	$scope.message="hello";
	var onUserComplete=function(response){
		$scope.user=response.data;
		
		$http.get($scope.user.repos_url)
		.then(onRepos,onError);
	// 		$http.get("https://api.github.com/users/"+$scope.username)
	// .then(onUserComplete,onError);
	};
	var onError=function(reason){
		$scope.error="could not fetch the user";
	}
	var onRepos=function(response){
	    $scope.repos=response.data;
	   // $scope.reponame=$scope.repos.name;
	    $location.hash("userDetails")
	    $anchorScroll();
	}
	$scope.username=$routeParams.username;
	$scope.repoSort="-name";
	// $http.get($scope.username).then(onUserComplete,onError);
	$http.get("https://api.github.com/users/"+$scope.username)
	.then(onUserComplete,onError);
}])