'use strict';

var app = angular.module('jmusser.broadcast');
app.service('Broadcast', function($http, $q, $state, $injector) {
	var listeners = [];

	return {
		subscribe: function(key, event, callback) {
			var listener = {key: key, event: event, callback: callback};
			listeners.push(listener);
		},

		publish: function(event, msg) {
			angular.forEach(listeners, function(value, key) {
				if(event === value.event) {
					value.callback(msg);
				}
			});
		},
		
		remove: function(key) {
			for(var i = listeners.length - 1; i >= 0; i--) {
				if(listeners[i].key === key) {
					listeners.splice(i, 1);
				}
			};
		},

		clear: function() {
			listeners = [];
		}
	}
});