
var fetch = require('node-fetch');
var Promise = require('es6-promise').Promise;
fetch.Promise = Promise;

global.fetch = fetch;
global.Promise = Promise;

module.exports = function(exports, handler) {
	exports.handler = function(event, context) {
		Promise.resolve(handler(event))
			.then(context.succeed.bind(context), context.fail.bind(context));
	};
};
