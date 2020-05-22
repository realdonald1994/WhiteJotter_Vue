import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    redirect: '/home',
    component:  Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: 'index',
    children: [
      {path: '/index', name: 'AppIndex', component: ()=>import('@/components/home/AppIndex')},
      {path: '/library',name:'AppLibrary',component:()=>import('@/components/library/LibraryIndex')},
      {path:'/jotter',name:'Jotter',component:()=>import('@/components/jotter/Articles')}
    ]
  },
  {
    path: '/login', name: 'Login', component: () => import('@/components/Login.vue')
  },
  {
    path: '/register', name: 'Register', component: () => import('@/components/Register.vue')
  },
  {
    path:'/admin',name:'Admin',component:()=> import('@/components/admin/AdminIndex'), meta:{requireAuth:true},
    children:[
      {path: '/admin/dashboard',name:'Dashboard',component: () => import('@/components/admin/dashboard/admin/index'), meta: {requireAuth: true}},
      {path: '/admin/content/editor',name:'Editor',component:()=>import('@/components/admin/content/ArticleEditor'), meta:{requireAuth:true}}
    ]
  },

]




const router = new VueRouter({
  mode:'history',
  routes
})

router.selfaddRoutes = (params) => {
  router.matcher = new VueRouter({mode: 'history'}).matcher
  router.addRoutes(params)
}
export default router

// 用于创建默认路由
// export default new VueRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'Default',
//       redirect: '/home',
//       component: Home
//     },
//     {
//       path: '/home',
//       name: 'Home',
//       component: Home,
//       redirect: '/index',
//       children: [
//         {
//           path: '/index',
//           name: 'AppIndex',
//           component: () => import('../components/home/AppIndex')
//         },
//         {
//           path: '/library',
//           name: 'Library',
//           component: () => import('../components/library/LibraryIndex')
//         }
//       ]
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: () => import('../components/Login')
//     },
//     {
//       path: '/register',
//       name: 'Register',
//       component: () => import('../components/Register')
//     },
//     {
//       path: '/admin',
//       name: 'Admin',
//       component: () => import('../components/admin/AdminIndex'),
//       meta: {
//         requireAuth: true
//       },
//       children: [
//         {
//           path: '/admin/dashboard',
//           name: 'Dashboard',
//           component: () => import('../components/admin/dashboard/admin/index'),
//           meta: {
//             requireAuth: true
//           }
//         }
//       ]
//     },
//   ]
// })

// 用于创建默认路由
export const createRouter =() => new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: () => import('../components/home/AppIndex')
        },
        {
          path: '/library',
          name: 'Library',
          component: () => import('../components/library/LibraryIndex')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../components/Register')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../components/admin/AdminIndex'),
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/admin/dashboard',
          name: 'Dashboard',
          component: () => import('../components/admin/dashboard/admin/index'),
          meta: {
            requireAuth: true
          }
        }
      ]
    },

  ]
})

