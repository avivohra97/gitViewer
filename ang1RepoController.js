var myApp=angular.module("myApp");
myApp.controller("RepoController",["$scope","$http","$interval",
	"$location","$anchorScroll","$stateParams",function($scope,$http,$interval,$location,$anchorScroll,$stateParams){
	$scope.message="hello";
	var onUserComplete=function(response){
		$scope.user=response.data;
		$scope.owner=$scope.user.owner;
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
	$scope.username=$stateParams.username;
	$scope.reponame=$stateParams.reponame;
	// $http.get($scope.username).then(onUserComplete,onError);
	$http.get("https://api.github.com/repos/"+$scope.username+"/"+$scope.reponame)
	.then(onUserComplete,onError);
}]) 