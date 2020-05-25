import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'


// axios.defaults.baseURL = 'http://localhost:8081/api'//nginx
axios.defaults.baseURL = 'http://localhost:8080/api'//nginx
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI,{locale})
Vue.use(mavonEditor)


axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error) {
      store.commit('logout')
      router.replace('/login')
    }
    // 返回接口返回的错误信息
    return Promise.reject(error)
  })

router.beforeEach(((to, from, next) => {
  if(store.getters.getUser && to.path.startsWith('/admin')){
    initAdminMenu(router,store)
    next()
  }

  if(store.getters.getUser && to.path.startsWith('/login')){
    next({
      path:'/admin/dashboard'
    })
  }

  if(to.meta.requireAuth){
    if(store.getters.getUser){
      axios.get('/authentication').then(res=>{
        if(res){
          next()
        }
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
  if(store.state.adminMenus.length>0){
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
      component:()=>import(`./components/admin/${route.component}`),
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

