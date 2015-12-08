angular.module('quiz').factory('Quiz', ['$resource',
	function($resource) {
		return $resource('api/quiz/:quizId', {
			quizId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);