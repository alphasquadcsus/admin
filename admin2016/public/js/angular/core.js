var adminApp = angular.module('adminApp', ['ngRoute','adminCtrl', 'adminService']);
adminApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'views/home.html',
			controller : 'mainCtrl'
		});
});