define([], function(){
    'use strict';

    var HOST_TO_CONNECT = '';

    return angular.module('portal.config', ['ui.router'])
        .run(['$rootScope', '$window', '$location'], function($rootScope, $window, $location) {
            $rootScope.$on('$stateChangeSuccess', function(event) {
                //TODO
            });
        })
        .constant('state_plugin_config', {
            main_root: 'root',
            home: 'home'
        })
        .constant('httpSettings', {
            timeout: 240000,
            reloadURL: '/index.html',
            serviceBaseURLs: {
                'dataCenter': HOST_TO_CONNECT + '/dc/service/handler/'
            }
        })
        .config(['$stateProvider', '$urlRouterProvider'], function($stateProvider, $urlRouterProvider) {
            var states = [
                {
                    name: 'root',
                    url: '',
                    template: '<div ui-view></div>',
                    abstrat: true,
                    data: {
                        defaultState: 'landing'
                    }
                }
            ];

            for(var i = 0; i < states.length, i++) {
                $stateProvider.state(states[i]);
            }

            $urlRouterProvider.when('', '');
            $urlRouterProvider.otherwise('home');
        });
});