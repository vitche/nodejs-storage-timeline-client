var moment = require('moment');
var client = require('../main');
// TODO: Set server URI
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
module.exports = {
	setUp: function (callback) {
		var storage = client.storageReference();
		storage.create('test', function () {
			var schema = client.schemaReference();
			schema.create('test', 'test', function () {
				callback();
			});
		});
	},
	testAddStringWithTime: function (test) {
		var timeLine = client.timelineReference();
		timeLine.addString('test', 'test', moment.utc().format('x'), ':)', function (result) {
			test.ok(1 === result, 'Should create a string record for a time-stamp');
			test.done();
		});
	},
	testAddStringWithoutTime: function (test) {
		var timeLine = client.timelineReference();
		timeLine.addString('test', 'test', ':)', function (result) {
			test.ok(1 === result, 'Should create a string record');
			test.done();
		});
	},
	testAddNumberWithTime: function (test) {
		var timeLine = client.timelineReference();
		timeLine.addNumber('test', 'test', moment.utc().format('x'), 7, function (result) {
			test.ok(1 === result, 'Should create a number record for a time-stamp');
			test.done();
		});
	},
	testAddNumberWithoutTime: function (test) {
		var timeLine = client.timelineReference();
		timeLine.addNumber('test', 'test', 7, function (result) {
			test.ok(1 === result, 'Should create a number record');
			test.done();
		});
	}
};