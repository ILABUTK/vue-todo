<template>
  <header class="header">
  	<h1>todos</h1>
  	<input class="new-todo"
  		autofocus autocomplate="off"
  		placeholder="What needs to be done?"
  		v-model="newTodo"
  		v-on="keyup:addTodo | key 'enter'">
  </header>
</template>

<script>
var store = require('../store')

module.exports = {
  name: 'header',
  props: {
    newTodo: ''
  },

  data: function () {
    return {
      todos: store.fetch(),
  	  editedTodo: null,
      visibility: 'all'
    }
  },

  ready: function () {
	this.$watch('todos', function (todos) {
	  store.save(todos);
	}, { deep: true });
  },

  methods: {
  	addTodo: function() {
  	  var value = this.newTodo && this.newTodo.trim();
  	  if(!value){
  		return;
  	  }
  	  this.todos.push({ title: value, completed: false});
  	  this.newTodo = '';
  	}
  }
}
</script>

<style lang="stylus">
</style>
