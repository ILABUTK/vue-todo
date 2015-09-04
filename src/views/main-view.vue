<template>
  <section class="main" v-show="todos.length" v-cloak>
    <input type="checkbox" class="toggle-all" v-model="allDone">
  </section>
</template>

<script>
var store = require('../store')

var active = require('../filters/active')

module.exports = {
  data: function () {
    return {
      todos: store.fetch()
    }
  },

  components: {
    'app-footer': require('../components/footer.vue')
  },

  computed: {
    remaining: function() {
      return active(this.todos).length;
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
  }

}
</script>

<style lang="stylus">
</style>