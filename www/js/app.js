var app = angular.module("app", ['ngRoute', 'ngResource']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'templates/list.html',
		controller: 'mainController'
	})
})

app.controller('mainController', function($scope, $http){
	$scope.card = [];
	$scope.movies = '';

	$http({
		method: 'GET', 
		url: "http://www.mocky.io/v2/581783ae1000008601cc7fd1"
	}).then(function(response){
		var data = response.data;
		for (var i in response.data) {
			$scope.card.push(data[i]);
		}
		console.log(response);
	}).catch(function(response){
		alert("error");
	})
})