<template>
  <section class="todoapp">
    <router-view></router-view>
  </section>
<app-footer author="{{author}}"></app-footer>
</template>


<script>
module.exports = {
  el: '#app',
  data: function() {
    return {
      author: 'Evan You',
      visibility: 'all'
    }
  },
  components: {
    // 'app-header': require('./components/header.vue'),
    'app-footer': require('./components/footer.vue')
  }
}
</script>

<style lang="stylus">
</style>