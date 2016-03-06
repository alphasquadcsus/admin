angular.module('adminCtrl',[])
	.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	
	}])
	.controller('siteCtrl', ['$scope', '$http', 'Site', function($scope, $http, Site){
		$scope.siteData = {};
		$scope.formData = {};
		Site.get()
			.success(function(data){
				$scope.siteData = data;
			});
		$scope.createSite = function() {
			Site.create($scope.formData)
				.success(function(data){
					$scope.formData = {};
					$scope.testForm = data;
				});
		}
	}])
	.controller('quizCtrl', ['$scope', '$http', function($scope, $http){
		
	}])
	
	.controller('testCtrl', ['$scope', '$http', function($scope, $http){
		$scope.quiz = [
			{ question: "", option1: "", option2: "", option3: "", option4: "", option5: "", answer: "", hint: ""}
		];
	}]);