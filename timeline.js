var generic = require('./generic');
var Timeline = function (uri) {
	this.prototype = generic;
	this.prototype.initialize(uri);
	// Stores a number (probably for a given time) into the time line.
	// 5 arguments: schema name, time line name, time, value, callback.
	// 4 arguments: schema name, time line name, value, callback.
	this.addNumber = function (arg0, arg1, arg2, arg3, arg4) {
		var schemaName;
		var timeLineName;
		var time;
		var value;
		var callback;
		if (arg4) {
			schemaName = arg0;
			timeLineName = arg1;
			time = arg2;
			value = arg3;
			callback = arg4;
		} else {
			schemaName = arg0;
			timeLineName = arg1;
			value = arg2;
			callback = arg3;
		}
		var request = {
			schema: schemaName,
			timeLine: timeLineName,
			value: value
		};
		if (arg4) {
			request.time = time;
		}
		this.prototype.execute('POST', 'timeline', 'add/number', request, callback);
	};
	this.addString = function (arg0, arg1, arg2, arg3, arg4) {
		var schemaName;
		var timeLineName;
		var time;
		var value;
		var callback;
		if (arg4) {
			schemaName = arg0;
			timeLineName = arg1;
			time = arg2;
			value = arg3;
			callback = arg4;
		} else {
			schemaName = arg0;
			timeLineName = arg1;
			value = arg2;
			callback = arg3;
		}
		var request = {
			schema: schemaName,
			timeLine: timeLineName,
			value: value
		};
		if (arg4) {
			request.time = time;
		}
		this.prototype.execute('POST', 'timeline', 'add/string', request, callback);
	};
	this.allNumbers = function (schemaName, timeLineName, callback) {
		this.prototype.execute('GET', 'timeline', 'all/numbers', {
			schema: schemaName,
			timeLine: timeLineName
		}, callback);
	};
	this.allStrings = function (schemaName, timeLineName, callback) {
		this.prototype.execute('GET', 'timeline', 'all/strings', {
			schema: schemaName,
			timeLine: timeLineName
		}, callback);
	};
};
module.exports = Timeline;