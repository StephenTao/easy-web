define([], function() {
    'use strict';

    return ['$http', '$q', 'httpSettings', function($http, $q, httpSettings) {
        var serviceBaseURLs = httpSettings.serviceBaseURLs;
        var baseHeader = {
            'ContentType' : 'application/json;charset=utf-8;'
        }

       return {
            send : function(callGroup, serviceEndpoint, method, parmas) {
                var headers = angular.copy(baseHeader);
                var callStart = new Date().getTime();
                requestCode++;

                return $http({
                    method: 'POST',
                    url: serviceBaseURLs[group] + serviceEndpoint,
                    data: {'id': requestCode, 'method': method, 'parmas': parmas, 'jsonrpc': '2.0'},
                    headers: headers,
                    timeout: httpSettings.timeout
                }).then(function(response) {
                    return response.data.result;
                }, function(error) {
                    var callTime = new Date().getTime() - callStart;
                    return $q.reject({
                        baseError: error,
                        isTimeOut: (error.status === 0) && callTime < httpSettings.timeout
                    });

                });

            },

            isSeesionExpired: function(reason) {
                return reason.isTimeOut === true;
            }
       }
    }];
});