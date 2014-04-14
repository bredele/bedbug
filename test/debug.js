var debug = require('..');
var assert = require('assert');
var wall = require('wall');

describe('debug', function() {
	
	var app;
	beforeEach(function() {
		app = wall();
		app.use(debug);
	});

	it('should add a debug handler', function() {
		assert(app.debug);
	});

});
