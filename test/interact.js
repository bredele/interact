var interact = require('..'),
		assert = require('assert');

describe("Express server", function() {
	var app;
	beforeEach(function() {
		app = interact();
	});

	it("should be an express server", function() {
		assert(app.use);
		assert(app.set);
	});

	it('should have a room handler', function() {
		assert(app.room);
	});
	
});
