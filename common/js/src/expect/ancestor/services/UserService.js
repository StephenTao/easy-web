define([], function() {
	'use strict';

	return ['JsonRPCService', function() {
		return {
			getCurrentUser: function() {
				return JsonRPCService.send('dataCenter', '/data/', 'getCurrentUser', []);
			}
		}
	}];
});