import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'


axios.defaults.baseURL = 'http://localhost:8080/api'
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI,{locale})

router.beforeEach(((to, from, next) => {
  if(store.getters.getUser.username && to.path.startsWith('/admin')){
    initAdminMenu(router,store)
  }
  if(store.getters.getUser.username && to.path.startsWith('/login')){
    next({
      path:'admin/dashboard'
    })
  }

  if(to.meta.requireAuth){
    if(store.getters.getUser.username){
      axios.get('/authentication').then(res=>{
        if(res.data){next()}
      })
    }else{
      next({
        path:'login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next()
  }
}))

const initAdminMenu = (router,store)=>{
  if(store.getters.getAdminMenus.length>0){
    return
  }
  axios.get('/menu').then(res=>{
    if(res && res.status ===200){
      let fmtRoutes = formatRoutes(res.data)
      router.selfaddRoutes(fmtRoutes)
      store.commit('SET_ADMIN_MENU',fmtRoutes)
    }
  })
}

const formatRoutes = (routes) => {
  let fmtRoutes = []
  routes.forEach(route => {
    if (route.children) {
      route.children = formatRoutes(route.children)
    }

    let fmtRoute = {
      path: route.path,
      component:()=>import(`@/components/admin/${route.component}`),
      name: route.name,
      nameZh: route.nameZh,
      iconCls: route.iconCls,
      meta: {
        requireAuth: true
      },
      children: route.children
    }
    fmtRoutes.push(fmtRoute)
  })
  return fmtRoutes
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

