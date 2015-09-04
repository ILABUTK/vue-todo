require('todomvc-app-css/index.css');

var Vue = require('vue')
var Router = require('director').Router

// strict mode
Vue.config.strict = true

// register filters globally
Vue.filter('all', require('./filters/all'))
Vue.filter('active', require('./filters/active'))
Vue.filter('completed', require('./filters/completed'))

var app = new Vue(require('./app.vue'))
var router = new Router()

router.on('/:page', function (page) {
  app.view = page
})

router.init('/main-view')