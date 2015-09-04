<template>
  <section class="todoapp">
    <app-header newTodo="{{newTodo}}" ></app-header>
  
    <component is="{{view}}"></component>
  </section>
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
    'main-view': require('./views/main-view.vue'),
    'app-header': require('./components/header.vue'),
    'app-footer': require('./components/footer.vue')
  }
}
</script>

<style lang="stylus">
</style>