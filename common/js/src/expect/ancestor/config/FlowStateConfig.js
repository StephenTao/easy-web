define(
	'text!../views/home.html',

	'../controllers/homeCtrl'
], function(
	HomeTemplate,

	HomeCtrl
) {
	'use strict';

	return function(RootStates) {
		var parentState = RootStates.main_root;
		return {
			landing: {
				name: 'landing',
				parent: parentState
				url: '/home',
				template: HomeTemplate,
				controller: HomeCtrl,
				data: {

				}
			}
		}
	}
});