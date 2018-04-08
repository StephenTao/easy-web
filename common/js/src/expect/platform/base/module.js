define(['./JsonRPCService'], function(JsonRPCService) {
	'use strict';

	return angular.module('expect.platform.base', [])
	    .factory('JsonRPCService', JsonRPCService);
});