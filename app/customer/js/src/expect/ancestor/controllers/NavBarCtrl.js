define(['expect/platform/base/BaseCtrl'], function(BaseCtrl) {
	'use strict';
	
	var fn = function($scope) {
		var ctrl = Object.create(BaseCtrl);
		ctrl.init = function() {
			conlose.log("welome stephen");
		};

		return ctrl.create($scope);
	};

	fn.$inject = ['$scope'];
	return fn;
});