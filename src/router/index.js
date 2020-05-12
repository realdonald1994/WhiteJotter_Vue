import Vue from 'vue'
import VueRouter from 'vue-router'
import AppIndex from "@/components/AppIndex";

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    redirect:'login'
  },
  {
    path: '/index',
    name: 'AppIndex',
    component: AppIndex,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
