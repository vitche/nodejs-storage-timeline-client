var request;
if ('browser' === process.env.RUNTIME) {
	request = require('browser-request');
} else {
	request = require('request');
}
module.exports = {
	_uri: undefined,
	initialize: function (uri) {
		this._uri = uri;
	},
	execute: function (method, entityName, methodName, arguments, callback) {
		var uri = this._uri + '/' + entityName + '/' + methodName;
		var handler = function (error, response, body) {
			body = JSON.parse(body);
			callback(body);
		};
		if ('POST' == method) {
			request.post(uri, {
				form: arguments
			}, handler);
		} else if ('GET' == method) {
			request.get(uri, {
				qs: arguments
			}, handler);
		}
	}
};