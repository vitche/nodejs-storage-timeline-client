var generic = require('./generic');
var Schema = function (uri) {
    this.prototype = generic;
    this.prototype.initialize(uri);
    this.create = function (schemaName, timeLineName, callback) {
        this.prototype.execute('POST', 'schema', 'create', {
            schema: schemaName,
            timeLine: timeLineName
        }, callback);
    };
    this.list = function (schemaName, callback) {
        this.prototype.execute('GET', 'schema', 'list', {
            schema: schemaName
        }, callback);
    };
};
module.exports = Schema;