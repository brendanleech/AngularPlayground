'use strict';

// JavaScript source code
angular.
	module('personDetail').
	component('personDetail', {
		templateUrl: 'person-detail/person-detail.template.html',
		controller: ['$routeParams',
			function PersonDetailController($routeParams) {
				this.personName = $routeParams.personName;
			}
		]
	});