var myApp=angular.module("myApp");
myApp.controller("RepoController",["$scope","$http","$interval",
	"$location","$anchorScroll","$routeParams",function($scope,$http,$interval,$location,$anchorScroll,$routeParams){
	$scope.message="hello";
	var onUserComplete=function(response){
		$scope.user=response.data;
		console.log($scope.user)
		$http.get($scope.user.contributors_url)
		.then(onContributor,onError);
	// 		$http.get("https://api.github.com/users/"+$scope.username)
	// .then(onUserComplete,onError);
	};
	var onError=function(reason){
		$scope.error="could not fetch the user";
	}
	var onContributor=function(response){
	    $scope.contributors=response.data;
	}
	$scope.username=$routeParams.username;
	$scope.reponame=$routeParams.reponame;
	// $http.get($scope.username).then(onUserComplete,onError);
	$http.get("https://api.github.com/repos/"+$scope.username+"/"+$scope.reponame)
	.then(onUserComplete,onError);
}]) 