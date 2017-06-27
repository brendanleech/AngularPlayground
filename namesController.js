'use strict';

// JavaScript source code
var testingAngular = angular.module('testingAngular', []);

testingAngular.controller('namesController', function namesController($scope) {
	$scope.names = [
		{
			name: 'Joanne',
			position: 'front right',
			seniority: 4,
			gender: 'female'
			//hasCubicle: true
		}, {
			name: 'Ron',
			position: 'back right',
			seniority: 3,
			gender: 'male'
			//hasCubicle: true
		}, {
			name: 'Rick',
			position: 'front left',
			seniority: 2,
			gender: 'male'
			//hasCubicle: true
		}, {
			name: 'Joe',
			position: 'back left',
			seniority: 4,
			gender:'male'
			//hasCubicle: true
		}, {
			name: 'Brendan',
			position: 'corner',
			seniority: 5,
			gender: 'male'
			//hasCubicle: false
		}
	];
});