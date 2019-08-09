import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../view/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    }
  ]
})
