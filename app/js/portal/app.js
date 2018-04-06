define([
	'underscore',
	'expect/ancestor/controller/NavBarCtrl'
	'expect/ancestor/app'
	], function(_, SnapCtrl) {
	'use strict';

	var modules = [
	    'expect.ancestor.app',
	    'ui.router'
	];
	
	return angulr.modules('portal/app', modules)
	    .controller('SnapCtrl', SnapCtrl)
	    .config(['$complieProvider', function($complieProvider) {
	    	$complieProvider.debugInfoEnable(false);
	    }]);
});