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
	execute: function (method, entityName, methodName, parameters, callback) {
		var uri = this._uri + '/' + entityName + '/' + methodName;
		var handler = function (error, response, body) {
			body = JSON.parse(body);
			callback(body);
		};
		if ('POST' == method) {
			request.post({
				uri: uri,
				form: parameters
			}, handler);
		} else if ('GET' == method) {
			request.get({
				uri: uri,
				qs: parameters
			}, handler);
		}
	}
};