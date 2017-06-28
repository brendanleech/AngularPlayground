'use strict';

// JavaScript source code
angular.
	module('testingAngular').
	config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');

			$routeProvider.
				when('/people', {
					template: '<name-list></name-list>'
				}).
				when('/people/:personName', {
					template: '<person-detail></person-detail>'
				}).
				otherwise('/people');
		}
	]);