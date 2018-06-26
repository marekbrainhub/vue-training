import Vue from 'vue'
import Router from 'vue-router'
import Game from './components/Game.vue'
import Index from './components/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
  ]
})
