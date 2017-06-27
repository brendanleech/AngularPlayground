'use strict';

// JavaScript source code
var testingAngular = angular.module('testingAngular', []);

testingAngular.controller('namesController', function namesController($scope) {
	$scope.names = [
		{
			name: 'Joanne',
			position: 'front right',
			seniority: 4
		}, {
			name: 'Ron',
			position: 'back right',
			seniority: 3
		}, {
			name: 'Rick',
			position: 'front left',
			seniority: 2
		}, {
			name: 'Joe',
			position: 'back left',
			seniority: 4
		}, {
			name: 'Brendan',
			position: 'corner',
			seniority: 5
		}
	];
});