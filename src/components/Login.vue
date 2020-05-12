<template>
  <div>
    username: <input type="text" v-model="loginForm.username" placeholder="please input your username">
    <br><br>
    password: <input type="text" v-model="loginForm.password" placeholder="please input your password">
    <br><br>
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{
      loginForm:{
        username:'',
        password:''
      },
      responseResult:[]
    }
  },
  methods:{
    login(){
      this.$axios.post('/login',{
        username:this.loginForm.username,
        password:this.loginForm.password
      }).then(res=>{
        if(res.data===200){
          this.$router.replace({path:'/index'})
        }
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>