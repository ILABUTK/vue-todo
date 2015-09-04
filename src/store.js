var STORAGE_KEY = 'todos-vuejs';
var Emitter = require('events').EventEmitter;
var store = module.exports = new Emitter();

store.fetch = function () {
	return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

store.save = function (todos) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
