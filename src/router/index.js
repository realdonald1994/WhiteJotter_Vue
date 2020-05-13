import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
  path: '/', redirect: 'login'
}, {
  path: '/home',
  name: 'Home',
  component: ()=> import('@/components/Home'),
  redirect: 'index',
  children: [
    {path: '/index', name: 'AppIndex', component: ()=>import('@/components/AppIndex'), meta: {requireAuth: true}},
    {path: '/library',name:'AppLibrary',component:()=>import('@/components/library/LibraryIndex'),meta: {requireAuth: true}}
  ]
}, {
  path: '/login', name: 'Login', component: () => import('@/components/Login.vue')
}]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
