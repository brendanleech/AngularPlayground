'use strict';

// JavaScript source code
angular.
	module('personDetail').
	component('personDetail', {
		templateUrl: 'person-detail/person-detail.template.html',
		controller: ['$http', '$routeParams',
			function PersonDetailController($http, $routeParams) {
				var self = this;

				$http.get('people/' + $routeParams.personName + '.json').then(function (response) {
					self.person = response.data;
				});
			}
		]
	});
