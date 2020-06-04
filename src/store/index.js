import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
    username:window.localStorage.getItem('username') == null ? '' : JSON.parse(window.localStorage.getItem('username' || '[]')),
    categories:window.sessionStorage.getItem('categories') == null ? [{id: 0, name: "All"},{id: 1, name: "Literature"},{id: 2, name: "Movie"},{id: 3, name: "Culture"},{id: 4, name: "Life"},{id: 5, name: "Sports"},{id: 6, name: "Technology"}] : JSON.parse(window.sessionStorage.getItem('categories' || '[]')),
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