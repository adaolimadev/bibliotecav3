import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadLivro from '../views/CadLivro.vue'
import ListLivro from '../views/ListLivro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cadlivro',
    name: 'cadlivro',
    component: CadLivro
  },
  {
    path: '/listlivro',
    name: 'listlivro',
    component: ListLivro
  }
]

const router = new VueRouter({
  routes
})

export default router
