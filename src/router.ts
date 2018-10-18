import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Freelance Web Developer',
        description: 'Gothenburg-based Freelance Web Developer. Fredrik Aronsson focuses on VueJS and CMS solutions.',
        siteName: " • Fredrik Aronsson"
      }
    },
    {
      path: '/:client',
      component: () => import('./views/Client.vue'),
      meta: {
        siteName: " • Fredrik Aronsson"
      }
    },
    {
      path: '/:client/:project',
      component: () => import('./views/Project.vue'),
      meta: {
        siteName: " • Fredrik Aronsson"
      }
    },
    {
      path: '/error/page-not-found',
      alias: '*',
      name: 'notfound',
      component: () => import('./views/404.vue'),
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

