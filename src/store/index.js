import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
    username:window.localStorage.getItem('username') == null ? '' : JSON.parse(window.localStorage.getItem('username' || '[]')),
    categories:[],
    initSideIndex:'0',
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
    },
    SET_SIDE_INDEX(state,val){
      state.initSideIndex = val
    },
    SET_ADMIN_MENU(state,val){
      state.adminMenus = val
    }
  }
})
export default store