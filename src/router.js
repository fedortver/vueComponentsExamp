import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './views/SignIn.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/signin',
			name: 'signin',
			component: SignIn
		},
		/*{
		  path: '/about',
		  name: 'about',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  // webpackChunkName: "about" 
		  component: () => import('./views/About.vue')
		}*/
	]
})
