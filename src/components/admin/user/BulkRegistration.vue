<template>
  <div>
    <el-button class="add-button" type="primary" @click="dialogFormVisible=true">Add users</el-button>
    <el-dialog
      title="Add User"
      :visible.sync="dialogFormVisible"
      @close="clear"
      width="25%">
      <el-form :model="registerForm" :rules="rules" label-position="left" label-width="0px" ref="ruleForm">
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
          <el-button type="info" class="btn-register"  @click="resetForm('ruleForm')" style="float: left">Reset</el-button>
          <el-button type="primary" class="btn-register" @click="register" style="float: right">Register</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "BulkRegistration",
    data(){
      return{
        dialogFormVisible:false,
        registerForm:{
          username:'',
          password:'',
          phone: '',
          email: ''
        },
        rules:{
          username:[{required:true,message:'Username can\'t be empty',trigger:'blur'}],
          password:[{required:true,message:'Password can\'t be empty',trigger:'blur'}],
          // phone:[{type: 'number', message: 'Phone must be a number'}],
          email:[{type: 'email', message: 'Please input the correct email address'}]
        },

      }
    },
    methods:{
      clear () {
        this.registerForm = {
          username: '',
          password: '',
          phone: '',
          email: ''
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      register(){
        this.$refs.ruleForm.validate((valid)=>{
          if(valid){
            this.$axios.post('/register',{
              username:this.registerForm.username,
              password:this.registerForm.password,
              phone: this.registerForm.phone,
              email: this.registerForm.email
            }).then(res=>{
              if(res.status===200){
                this.$alert('Registered successfully','Information',{
                  confirmButtonText:'Ok'
                })
                this.dialogFormVisible = false
                this.clear()
                this.$emit('onSubmit')
              }
            }).catch(err=>{
              this.$message.error(err.response.data.message)
              this.dialogFormVisible = false
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
  .btn-register {
    /*background-color: #505458;*/
    width: 40%;
    border: none;
  }
  .add-button {
    margin: 38px 0 0 33px;
  }
</style>