var debug = require('..');
var assert = require('assert');
var plumby = require('plumby');

describe('debug', function() {
	
	var app;
	beforeEach(function() {
		app = plumby();
		app.use(debug);
	});

	it('should add a debug handler', function() {
		assert(app.debug);
	});

});
