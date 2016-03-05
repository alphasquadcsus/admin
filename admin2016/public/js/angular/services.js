angular.module('adminService',[])
	.factory('Site', ['$http', function($http){
		return {
			get : function() {
				return $http.get('/api/sites/view')
			},
			create : function(siteData) {
				return $http.post('/api/sites/add', siteData)
			}
		}
	}]);