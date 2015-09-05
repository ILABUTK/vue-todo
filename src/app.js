require('todomvc-app-css/index.css');

var Vue = require('vue')
var Router = require('director').Router

Vue.config.debug = true

// strict mode
Vue.config.strict = true

// register filters globally
Vue.filter('all', require('./filters/all'))
Vue.filter('active', require('./filters/active'))
Vue.filter('completed', require('./filters/completed'))

var app = new Vue(require('./app.vue'))
var router = new Router()

// router.on('/:page', function (page) {
//   app.view = page
// })

var state = ['all', 'active', 'completed']
state.forEach(function (visibility) {
	router.on(visibility, function () {
		app.visibility = visibility;
	});
})

router.init()
// router.init('/main-view')