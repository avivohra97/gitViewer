var myApp=angular.module("myApp");
myApp.controller("MainController",["$scope","$http","$interval",
	"$location","$anchorScroll",function($scope,$http,$interval,$location,$anchorScroll){
	$scope.message="hello";
	$scope.search=function(username){
	// 	$http.get("https://api.github.com/users/"+username)
	// .then(onUserComplete,onError);
	if(countdownInterval){
		$interval.cancel(countdownInterval)
		$scope.countdown=0;
	}
	 $location.path("/user/"+username);
	}
	// var onUserComplete=function(response){
	// 	$scope.user=response.data;
	// 	$http.get($scope.user.repos_url)
	// 	.then(onRepos,onError);
	// };
	// var onError=function(reason){
	// 	$scope.error="could not fetch the user";
	// }
	// var onRepos=function(response){
	//     $scope.repos=response.data;
	//     $location.hash("userDetails")
	//     $anchorScroll();
	// }
	var decrementCountDown=function(){
		$scope.countdown-=1;
		if($scope.countdown<1){
			$scope.search($scope.username)

		}
	}
	var countdownInterval=null;
	var startCountdown=function(){
		countdownInterval=$interval(decrementCountDown,1000,$scope.countdown)
	}
	$scope.username="angular"
	$scope.countdown=5;
	startCountdown();
	//$scope.repoSort="-name";
	// $http.get($scope.username).then(onUserComplete,onError);
}])