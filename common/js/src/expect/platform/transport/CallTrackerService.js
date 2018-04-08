define([], function() {
    'use strict';

    return ['$rootScope', function($rootScope) {
    	var $rootScope.callTrackerCounter = 0;
       return {
            registerCallStart : function() {
            	$rootScope.callTrackerCounter += 1;
            	console.log("registerCallStart");
            },
            registerCallSuccess: function() {
            	$rootScope.callTrackerCounter += 1;
                console.log("registerCallSuccess");
            },
            registerCallError: function() {
            	$rootScope.callTrackerCounter += 1;
                console.log("registerCallError");
            }
       }
    }];
});