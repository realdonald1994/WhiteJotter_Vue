import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
    user:{
      username:window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    },
    categories:[],
    initSideIndex:'0',
  },
  getters:{
    getUser(){
      return store.state.user
    },
    getCategories(){
      return store.state.categories
    },
    getInitSideIndex(){
      return store.state.initSideIndex
    }
  },
  mutations: {
    LOGIN(state,user){
      state.user = user
      window.localStorage.setItem('user',JSON.stringify(user))
    },
    LOGOUT(state){
      state.user =[]
      window.localStorage.removeItem('user')
    },
    SET_CATEGORIES(state,val){
      state.categories = val
    },
    SET_SIDE_INDEX(state,val){
      state.initSideIndex = val
    }
  }
})
export default store