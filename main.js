var StorageClass = require('./storage');
var SchemaClass = require('./schema');
var TimeLineClass = require('./timeline');
module.exports = {
    _uri: undefined,
    setUri: function (value) {
        module.exports._uri = value
    },
    storageReference: function () {
        return new StorageClass(module.exports._uri);
    },
    schemaReference: function () {
        return new SchemaClass(module.exports._uri);
    },
    timelineReference: function () {
        return new TimeLineClass(module.exports._uri);
    }
};