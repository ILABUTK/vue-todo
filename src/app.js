require('todomvc-app-css/index.css');

var Vue = require('vue')
var VueRouter = require('vue-router')

// install router
Vue.use(VueRouter)

// debug mode
Vue.config.debug = true

// strict mode
Vue.config.strict = true

// register filters globally
Vue.filter('all', require('./filters/all'))
Vue.filter('active', require('./filters/active'))
Vue.filter('completed', require('./filters/completed'))

var router = new VueRouter({
	history: true
})

router.map({

	'/': {
		component: require('./views/main-view.vue'),

		subRoutes: {
			'/all': {
				// component: require('./views/main-view.vue')
			},
			'/active': {
				// component: require('./views/main-view.vue')
			},
			'/completed': {
				// component: require('./views/main-view.vue')
			}
		}
	},
	'*': {
		component: require('./views/main-view.vue')
	}
})   

router.beforeEach(function(transition) {
	if(transition.to.path === '/all'){
		router.app.visibility = 'all';
	} 
	else if(transition.to.path === '/active'){
		router.app.visibility = 'active';
	} 
	else if(transition.to.path === '/completed'){
		router.app.visibility = 'completed';
	}
	transition.next()
})

var App = Vue.extend(require('./app.vue'))
router.start(App, '#app')


// var state = ['all', 'active', 'completed']
// state.forEach(function (visibility) {
// 	router.on(visibility, function () {
// 		app.visibility = visibility;
// 	});
