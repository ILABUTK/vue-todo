<template>
  <section class="main" v-show="todos.length" v-cloak>
    <input type="checkbox" class="toggle-all" v-model="allDone">
    <ul class="todo-list">
      <li class="todo"
        v-repeat="todo: filteredTodos"
        v-class="completed: todo.completed, editing: todo == editedTodo">
        <div class="view">
          <input type="checkbox" class="toggle" v-model="todo.completed">
          <label v-on="dblclick: editTodo(todo)">{{todo.title}}</label>
          <button class="destroy" v-on="click: removeTodo(todo)"></button>
        </div>
        <input type="text" class="edit"
        v-model="todo.title"
        v-todo-focus="todo == editedTodo"
        v-on="blur: doneEdit(todo),
              keyup: doneEdit(doto) | key 'enter
              keyup: cancelEdit(todo) |key 'esc'">
      </li>
    </ul>
  </section>
</template>

<script>
var store = require('../store')

var filters = require('../todofilter')


module.exports = {
  data: function () {
    return {
      todos: store.fetch(),
      visibility: 'all'
    }
  },

  components: {
    'app-footer': require('../components/footer.vue')
  },

  computed: {
    filteredTodos: function() {
      return filters[this.visibility](this.todos);
    },
    remaining: function() {
      return filters.active(this.todos).length;
    },
    allDone: {
      get: function() {
        return this.remaining === 0;
      },
      set: function(value) {
        this.todos.forEach(function(todo) {
          todo.completed = value;
        })
      } 
    }
  },

  ready: function () {
      this.$watch('todos', function (todos) {
        store.save(todos);
      }, { deep: true });
  },

  methods: {
    removeTodo: function(todo) {
      this.todos.$remove(todo);
    },

    editTodo: function(todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },

    doneEdit: function(todo) {
      if(!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if(!todo.title) {
        this.removeTodo(todo);
      }
    },

    cancelEdit: function(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },

    removeCompleted: function() {
      this.todos = active(this.todos);
    }
  },

  directives: {
    'todo-focus': function(value) {
      if(!value) {
        return;
      }
      var el = this.el;
      setTimeout(function() {
        el.focus();
      }, 0);
    }
  }

}
</script>

<style lang="stylus">
</style>