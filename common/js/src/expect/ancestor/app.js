define([
	'underscore',
	'./config/FlowStateConfig',
	'text!app-features',

	'../../ancestor/controllers/NavBarCtrl',
	'../../ancestor/services/UserService'

	'portalConfig',
	'expect/platform/base/module',
	'expect/platform/transport/module'
], function(
	_,
	AncestorFlowStateConfig,
	Features,
	NavBarCtrl,
	UserService
) {
	'use strict';

	var modelues = [
        'portal.config',
        'expect.platform.base',
        'expect.platform.transport'
	];

	return angular.module('expect.ancestor.app', modelues)

	    .config(['$stateProvider', 'state_plugin_config'], function($stateProvider, RootStateConfig) {
	    	var states = new AncestorFlowStateConfig(RootStateConfig);
	    	_.values(states).forEach(function(state) {
	    		$stateProvider.state(state);
	    	});

	    })
	    
	    .factory('UserService', UserService)

	    .controller('NavBarCtrl', NavBarCtrl);
});