'use strict';

// JavaScript source code
angular.
	module('nameList').
	component('nameList', {
		templateUrl: 'name-list/name-list.template.html',
		controller: ['$http', function NameListController($http) {
			var self = this;

			$http.get('people/people.json').then(function (response) {
				self.names = response.data;
			});
		}]
	});