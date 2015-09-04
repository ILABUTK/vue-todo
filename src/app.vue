<template>
  <section class="todoapp">
    <app-header newTodo="{{newTodo}}" ></app-header>

  </section>
<component is="{{view}}"></component>
<app-footer author="{{author}}"></app-footer>
</template>


<script>
module.exports = {
  el: '#app',
  data: {
    view: '',
    newTodo: {},
    author: 'Evan You'
  },
  components: {
    'app-header': require('./components/header.vue'),
    'app-footer': require('./components/footer.vue')
  }
}
</script>

<style lang="stylus">
</style>