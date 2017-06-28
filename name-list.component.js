'use strict';

// JavaScript source code
angular.
	module('nameList').
	component('nameList', {
		templateUrl: 'name-list/name-list.template.html',
		controller: function NameListController() {
			this.names = [
				{
					name: 'Joanne',
					position: 'front right',
					seniority: 3,
					gender: 'female',
					hasCubicle: true
				}, {
					name: 'Ron',
					position: 'back right',
					seniority: 2,
					gender: 'male',
					hasCubicle: true
				}, {
					name: 'Rick',
					position: 'front left',
					seniority: 1,
					gender: 'male',
					hasCubicle: true
				}, {
					name: 'Joe',
					position: 'back left',
					seniority: 4,
					gender: 'male',
					hasCubicle: true
				}, {
					name: 'Brendan',
					position: 'corner',
					seniority: 6,
					gender: 'male',
					hasCubicle: false
				}, {
					name: 'Josh',
					position: 'corner',
					seniority: 5,
					gender: 'male',
					hasCubicle: false
				}
			];
		}
	});