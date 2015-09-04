// call function by function's string name 
// 1. window['name']()
// 2. namespace['name']()
var Emitter = require('events').EventEmitter;
var filters = module.exports = new Emitter();

filters.all = function (todos) {
	return todos;
}

filters.active = function (todos) {
	return todos.filter(function (todo) {
  	return !todo.completed;
  })
}

filters.completed = function (todos) {
	return todos.filter(function (todo) {
  	return todo.completed;
  })
}
