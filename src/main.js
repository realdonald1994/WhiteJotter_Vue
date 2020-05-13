import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'


axios.defaults.baseURL = 'http://localhost:8080/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI,{locale})

router.beforeEach(((to, from, next) => {
  if(to.meta.requireAuth){
    if(store.getters.getUser.username){
      next()
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

