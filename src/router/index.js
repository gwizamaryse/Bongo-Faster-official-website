import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history'
  ,base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
  ,scrollBehavior : function( to, from, savedPosition ){
		return { x:0, y:0 }
	}
});
