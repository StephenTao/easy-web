define('angular', function(){
	'use strict';
	return window.angular;
};

define('jquery', function(){
	'use strict';
	return window.jQuery;
};

require.config({
	'baseUrl': '../js/',

	waitSeconds: 10,

	'path': {
		'bower_components': '../../common/js/bower_components',
		'underscore': '../../common/js/bower_components/underscore/underscore',
		'text': '../../common/js/bower_components/requirejs-text/text',
		'expect': '../../common/js/src/expect',
		'customerExpect': '../js/src/expect'
		'app-features': './features.json'
	},

	'shim': {
		'underscore': {
			exports: '_'
		}
	},

	map: {
		* : {
			'expect/ancestor/app' : 'customerExpect/ancestor/app'

		}

	}
});


require(['portal/app'], function(app) {
	'use strict';
    return angular.bootstrap(document, [app.name]);
});