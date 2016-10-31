angular.module('mainController', [])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {templateUrl: 'templates/list.html', controller: 'mainController'});
	$routeProvider.otherwise({redirectTo: '/home'});
}])

.controller('mainController', function($scope) {
	alert();
})