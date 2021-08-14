import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Backlog from '@/components/Backlog.vue'
import KanbanBoard from '@/components/KanbanBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/backlog',
    component: Backlog,
  },
  {
    path: '/board',
    component: KanbanBoard
  },
  {
    path: '*',
    redirect: '/backlog'
  }
]

const router = new VueRouter({
  routes
})

export default router
