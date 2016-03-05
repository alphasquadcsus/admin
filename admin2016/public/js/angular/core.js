var adminApp = angular.module('adminApp', ['ngRoute','adminCtrl', 'adminService']);
adminApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'views/home.html',
			controller : 'mainCtrl'
		})
		.when('/quiz/view', {
			templateUrl : 'views/viewQuiz.html',
			controller : 'quizCtrl'
		})
		.when('/quiz/add', {
			templateUrl : 'views/addQuiz.html',
			controller : 'quizCtrl'
		})
		.when('/site/view', {
			templateUrl : '/views/viewSite.html',
			controller : 'siteCtrl'
		})
		.when('/site/add', {
			templateUrl : '/views/addSite.html',
			controller : 'siteCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
		
	// Use HTML5 History API, Removes # from url
	$locationProvider.html5Mode(true);
}]);

		