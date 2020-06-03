import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
    username:window.localStorage.getItem('username') == null ? '' : JSON.parse(window.localStorage.getItem('username' || '[]')),
    categories:window.sessionStorage.getItem('categories') == null ? [] : JSON.parse(window.sessionStorage.getItem('categories' || '[]')),
    initSideIndex:window.sessionStorage.getItem('index') == null ? '0' : JSON.parse(window.sessionStorage.getItem('index' || '[]')),
    adminMenus:[]
  },
  getters:{
    getUser(){
      return store.state.username
    },
    getCategories(){
      return store.state.categories
    },
    getInitSideIndex(){
      return store.state.initSideIndex
    },
    getAdminMenus(){
      return store.state.adminMenus
    }

  },
  mutations: {
    LOGIN(state,username){
      state.username = username
      window.localStorage.setItem('username',JSON.stringify(username))
    },
    LOGOUT(state){
      state.username =''
      window.localStorage.removeItem('username')
      state.adminMenus = []
    },
    SET_CATEGORIES(state,val){
      state.categories = val
      window.sessionStorage.setItem('categories',JSON.stringify(val))
    },
    SET_SIDE_INDEX(state,val){
      state.initSideIndex = val
      window.sessionStorage.setItem('index',JSON.stringify(val))
    },
    SET_ADMIN_MENU(state,val){
      state.adminMenus = val
    }
  }
})
export default store