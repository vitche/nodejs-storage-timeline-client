var generic = require('./generic');
var Timeline = function (uri) {
    this.prototype = generic;
    this.prototype.initialize(uri);
    this.addNumber = function (schemaName, timeLineName, value, callback) {
        this.prototype.execute('POST', 'timeline', 'add/number', {
            schema: schemaName,
            timeLine: timeLineName,
            value: value
        }, callback);
    };
	this.addNumberForTime = function (schemaName, timeLineName, time, value, callback) {
		this.prototype.execute('POST', 'timeline', 'add/number', {
			schema: schemaName,
			timeLine: timeLineName,
			time: time,
			value: value
		}, callback);
	};
    this.addString = function (schemaName, timeLineName, value, callback) {
        this.prototype.execute('POST', 'timeline', 'add/string', {
            schema: schemaName,
            timeLine: timeLineName,
            value: value
        }, callback);
    };
	this.addStringForTime = function (schemaName, timeLineName, time, value, callback) {
		this.prototype.execute('POST', 'timeline', 'add/string', {
			schema: schemaName,
			timeLine: timeLineName,
			time: time,
			value: value
		}, callback);
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