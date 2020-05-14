import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
    user:{
      username:window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    },
    categories:[]
  },
  getters:{
    getUser(){
      return store.state.user
    },
    getCategories(){
      return store.state.categories
    }
  },
  mutations: {
    login(state,user){
      state.user = user
      window.localStorage.setItem('user',JSON.stringify(user))
    },
    SET_CATEGORIES(state,val){
      state.categories = val
    }
  }
})
export default store