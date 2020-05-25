<template>
  <body id="paper" v-loading="loading">
    <el-form ref="form" :model="registerForm" label-width="0px" label-position="left" class="container-register" :rules="rules">
      <h3 class="title-register">Register</h3>
      <el-form-item prop="username">
        <el-input v-model="registerForm.username" placeholder="username" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="registerForm.password" placeholder="password" prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input v-model="registerForm.phone" placeholder="Mobile Phone" prefix-icon="el-icon-mobile-phone"></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input v-model="registerForm.email" placeholder="E-Mail" prefix-icon="el-icon-message"></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="info" class="btn-register" @click="$router.back()" style="float: left">Cancel</el-button>
        <el-button type="primary" class="btn-register" @click="register" style="float: right">Register</el-button>
      </el-form-item>
    </el-form>
  </body>
</template>

<script>
  export default {
    name: "Register",
    data(){
      return{
        registerForm:{
          username:'',
          password:'',
          phone: '',
          email: ''
        },
        rules:{
          username:[{required:true,message:'Username can\'t be empty',trigger:'blur'}],
          password:[{required:true,message:'Password can\'t be empty',trigger:'blur'}],
          email:[{type: 'email', message: 'Please input the correct email address'}]
        },
        loading:false
      }
    },
    methods:{
      register(){
        this.$refs.form.validate((valid)=>{
          if(valid){
            this.$axios.post('/register',{
              username:this.registerForm.username,
              password:this.registerForm.password,
              phone: this.registerForm.phone,
              email: this.registerForm.email
            }).then(res=>{
              if(res.status===200){
                console.log(res)
                this.$alert('Registered successfully','Information',{
                  confirmButtonText:'Ok'
                })
                this.$router.replace('/login')
              }
            }).catch(err=>{
              this.$message.error(err.response.data.message)
            })
          }else{
            return false;
          }
        })
      }
    }
  }
</script>

<style scoped>
  #paper {
    background: url("../assets/eva1.jpg") no-repeat center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  .container-register {
    border-radius: 15px;
    width: 350px;
    background: #fff;
    padding: 35px 35px 15px 35px;
    margin: 180px auto;
    background-clip: padding-box;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title-register {
    margin: 40px auto;
    text-align: center;
    color: #505458;
  }
  body {
    margin: 0;
  }
  .btn-register {
    /*background-color: #505458;*/
    width: 40%;
    border: none;
  }
</style>