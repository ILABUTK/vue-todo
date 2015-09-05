<template>
  <section class="todoapp">
    <component is="{{view}}"></component>
  </section>
<app-footer author="{{author}}"></app-footer>
</template>


<script>
module.exports = {
  el: '#app',
  data: {
    view: 'main-view',
    author: 'Evan You',
    visibility: 'all'
  },
  components: {
    'main-view': require('./views/main-view.vue'),
    // 'app-header': require('./components/header.vue'),
    'app-footer': require('./components/footer.vue')
  }
}
</script>

<style lang="stylus">
</style>