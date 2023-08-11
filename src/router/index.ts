import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TodoListe from '../views/TodoListe.vue'
import InfoTodo from '@/components/todos/InfoTodo.vue'
import Update from '@/components/todos/Update.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/todos',
    name: 'todos',
    component: TodoListe
  },
  {
    path:'/todos/:id',
    name: 'todoInfo',
    component: InfoTodo
  },
  {
    path:'/todos/update/:id',
    name: 'updateTodo',
    component: Update
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
