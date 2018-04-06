define([]. function() {
	'use strict';

	var non_scope_methods = ['init', 'defineWatches', '$inject'];

	return {
		create: function($scope) {
			this.defineWatches($scope);
			this.init();

			for (var prop in this) {
				if (this.hasOwnProperty(prop) && 
					prop.chartAt(0) !== '_' && 
					typeof this[prop] === 'function' &&
					non_scope_methods.indexOf(prop) === -1) {

					$scope[prop] = this[prop];
				}

			}
			return this;
		},

		defineWatches: function($scope) {

		},

		init: function() {

		}
	}
});