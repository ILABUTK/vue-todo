<template>
  <footer class="info">
  	<p>Double-click to edit a todo</p>
  	<p>Written by <a href="http://evanyou.me">{{author}}</a></p>
  	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>

<script>
module.exports = {
  props: ['author']
}
</script>

<style lang="stylus">
</style>