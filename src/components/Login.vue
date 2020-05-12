<template>
  <div id="poster">
    <el-form class="container-login" label-position="left" label-width="0px">
      <h3 class="title-login">Login</h3>
      <el-form-item>
        <el-input v-model="loginForm.username" placeholder="username" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" placeholder="password" show-password prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="info" class="btn-login" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>


</template>

<script>
export default {
  name:'login',
  data(){
    return{
      loginForm:{
        username:'admin',
        password:'123'
      },
      responseResult:[]
    }
  },
  methods:{
    login(){
      let _this = this
      console.log(this.$store.state)
      this.$axios.post('/login',{
        username:this.loginForm.username,
        password:this.loginForm.password
      }).then(res=>{
        if(res.data===200){
          _this.$store.commit('login',_this.loginForm)
          let path  = this.$route.query.redirect;
          console.log(path)
          this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
        }
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .btn-login {
    /*background-color: #505458;*/
    width: 100%;
    border: none;
  }

  .container-login {
    border-radius: 15px;
    width: 350px;
    background-color: #fff;
    padding: 35px 35px 15px 35px;
    margin: 180px auto;
    background-clip: padding-box;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .title-login {
    margin: 40px auto;
    text-align: center;
    color: #505458;
  }
  #poster {
    background: url("../assets/eva1.jpg") no-repeat center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }


</style>