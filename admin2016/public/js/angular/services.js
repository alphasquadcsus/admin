angular.module('adminService',[])
	.factory('Site', function($http){
		return {
			get : function() {
				return $http.get('/api/sites/')
			}
		}
	});