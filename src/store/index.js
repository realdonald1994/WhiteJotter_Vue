import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
    user:{
      username:window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    }
  },
  getters:{
    getUser(){
      return store.state.user
    }
  },
  mutations: {
    login(state,user){
      state.user = user
      window.localStorage.setItem('user',JSON.stringify(user))
    }
  }
})
export default store