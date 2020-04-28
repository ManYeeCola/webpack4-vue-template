import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: 
  [
      { path: '/component', component: () => import(/* webpackChunkName:'component'*/ './../components/component.vue') },
      {
          path: '/',
          name: 'index',
          component: () => import(/* webpackChunkName:'index'*/ './../components/index.vue'),
          alias: 'index'
      }
  ]
})