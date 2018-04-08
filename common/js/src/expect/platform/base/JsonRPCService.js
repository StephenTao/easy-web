define([], function() {
	'use strict';

	return ['$location', 'TransportService', 'CallTrackerService' function($location, TransportService, CallTrackerService) {
		return {
			send: function() {
				CallTrackerService.registerCallStart();
				return (
					TransportService.send()
					    .then(function(response) {
					    	CallTrackerService.registerCallSuccess();
					    	return response;
					    }, function(error) {
					    	CallTrackerService.registerCallError();
					    	if(TransportService.isSeesionExpired(error)) {
					    		$location.reload(true);
					    	}
					    	throw error;
					    })
				);
			}
		}
	}];

});