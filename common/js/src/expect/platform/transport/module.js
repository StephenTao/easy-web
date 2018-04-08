define(['./TransportService', './CallTrackerService', 'portalConfig'], function(TransportService, CallTrackerService) {
	'use strict';

	return angular.module('expect.platform.transport', ['portal.config'])
	    .factory('CallTrackerService', CallTrackerService)
	    .factory('TransportService', TransportService);
});