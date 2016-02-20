angular.module('adminCtrl',[])
	.controller('mainCtrl', function($scope, $http, Site){
		Site.get()
			.success(function(data){
				$scope.siteData = data;
			});
	});