import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    redirect: '/home',
    component:  ()=> import('@/components/Home'),
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=> import('@/components/Home'),
    redirect: 'index',
    children: [
      {path: '/index', name: 'AppIndex', component: ()=>import('@/components/home/AppIndex'), meta: {requireAuth: true}},
      {path: '/library',name:'AppLibrary',component:()=>import('@/components/library/LibraryIndex'),meta: {requireAuth: true}}
    ]
  },
  {
    path: '/login', name: 'Login', component: () => import('@/components/Login.vue')
  },
  {
    path: '/register', name: 'Register', component: () => import('@/components/Register.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
