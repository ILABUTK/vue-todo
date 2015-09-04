module.exports = function (todos) {
  return todos.filter(function (todo) {
  	return !todo.completed;
  })
}