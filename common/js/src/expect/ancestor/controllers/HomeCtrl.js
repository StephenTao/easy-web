define(['expect/platform/base/BaseCtrl', 'underscore'], function(BaseCtrl, _) {
	'use strict';

	var fn = function($scope) {
		var ctrl = Object.create(BaseCtrl);

		ctrl.init = function() {

		};

		return ctrl.create($scope);
	}

	fn.$inject = ['$scope'];
	return fn;
});