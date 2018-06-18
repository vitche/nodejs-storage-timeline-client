var generic = require('./generic');
var Storage = function (uri) {
    this.prototype = generic;
    this.prototype.initialize(uri);
    this.create = function (schemaName, callback) {
        this.prototype.execute('POST', 'storage', 'create', {
            schema: schemaName
        }, callback);
    };
    this.list = function (callback) {
        this.prototype.execute('GET', 'storage', 'list', {}, callback);
    };
};
module.exports = Storage;