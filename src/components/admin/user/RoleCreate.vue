<template>
  <div>
    <el-button type="primary" class="add-button" @click="dialogFormVisible=true">Add Role</el-button>
    <el-dialog
      title="Add Role"
      :visible.sync="dialogFormVisible"
      @close="clear"
      width="25%">
      <el-form :model="roleForm" :rules="rules" label-position="left" label-width="0px" ref="Form" v-loading="loading">
        <el-form-item prop="name">
          <el-input v-model="roleForm.name" placeholder="role name" prefix-icon="el-icon-s-custom"></el-input>
        </el-form-item>
        <el-form-item prop="nameZh">
          <el-input v-model="roleForm.nameZh" placeholder="role description" prefix-icon="el-icon-edit"></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="info" class="btn-register"  @click="resetForm('Form')" style="float: left">Reset</el-button>
          <el-button type="primary" class="btn-register" @click="createRole" style="float: right">Create</el-button>
        </el-form-item>
        <el-form-item prop="perm">
          <el-tag>Initial Permission: None</el-tag>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "RoleCreate",
    data () {
      return {
        dialogFormVisible: false,
        roleForm: {
          name: '',
          nameZh: ''
        },
        rules: {
          name: [{required: true, message: 'Role name can\'t be empty', trigger: 'blur'}]
        },
        loading: false
      }
    },
    methods:{
      clear () {
        this.roleForm = {
          name: '',
          nameZh: ''
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      createRole(){
        this.$refs.Form.validate((valid)=>{
          if(valid){
            this.$axios.post('/admin/role',{
              name:this.roleForm.name,
              nameZh:this.roleForm.nameZh
            }).then(res=>{
              if(res && res.status === 200){
                this.$alert(res.data,'Tip',{
                  confirmButtonText:'Yes'
                })
                this.clear()
                this.$emit('onSubmit')
              }
            }).catch(err=>{
              this.$alert(err.response.data.message,{
                confirmButtonText:'Yes',
                type:'warning'
              })
            })
            this.dialogFormVisible = false
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