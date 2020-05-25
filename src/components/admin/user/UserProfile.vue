<template>
  <div>

    <el-dialog title="Modify User" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="selectedUser" label-suffix=":">
        <el-form-item label="Nickname" label-width="120px" prop="username">
          <label>{{selectedUser.username}}</label>
        </el-form-item>
        <el-form-item label="Phone Number" label-width="120px" prop="phone">
          <el-input v-model="selectedUser.phone" placeholder="Phone Number" clearable></el-input>
        </el-form-item>
        <el-form-item label="Email" label-width="120px" prop="email">
          <el-input v-model="selectedUser.email" placeholder="Email" clearable></el-input>
        </el-form-item>
        <el-form-item label="Password" label-width="120px" prop="password">
          <el-button type="warning" @click="resetPassword(selectedUser.username)" round>Reset</el-button>
        </el-form-item>
        <el-form-item label="Role" label-width="120px" prop="roles">
          <el-checkbox-group v-model="selectedRolesIds">
            <el-checkbox v-for="(role,index) in roles" :label="role.id" :key="index">{{role.nameZh}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="dialogFormVisible =false">Cancel</el-button>
        <el-button type="primary" @click="onSubmit(selectedUser)">Submit</el-button>
      </div>
    </el-dialog>
    <el-row style="margin: 58px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/admin/dashboard">Admin</el-breadcrumb-item>
        <el-breadcrumb-item>User Management</el-breadcrumb-item>
        <el-breadcrumb-item>User Info</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>

    <el-card style="margin: 38px 2%;width: 95%">
      <el-table
        :data="users"
        stripe
        style="width: 100%"
        :default-sort = "{prop: 'id', order: 'ascending'}"
        :max-height="tableHeight"
        ref="multipleTable"
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label="Id"
          sortable
          width="150"
        >
        </el-table-column>

        <el-table-column
          prop="username"
          label="NickName"
        >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="Phone Number"
        >
        </el-table-column>
        <el-table-column
          prop="email"
          label="Email"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          label="Activated"
          sortable
        >
          <template slot-scope="scope">
            <el-switch v-model="scope.row.enabled" active-color="#13ce66" inactive-color="#ff4949" @change="(value)=> commitStatusChange(value,scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="Operation"
          width="120"
        >
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click="editUser(scope.row)" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" @click="deleteUser(scope.row.id)" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 20px 0 20px 0;float: left">
        <el-button type="info" @click="toggleSelection()" round>Clear Selection</el-button>
        <el-button type="primary" round>Batch Delete</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "UserProfile",
    data(){
      return{
        users:[],
        roles:[],
        dialogFormVisible: false,
        selectedUser: [],
        selectedRolesIds:[]
      }
    },
    methods:{
      listUsers(){
        this.$axios.get('/admin/user').then(res=>{
          if(res&&res.status ===200){
            this.users = res.data
          }
        })
      },
      listRoles(){
        this.$axios.get('/admin/role').then(res=>{
          if(res && res.status ===200){
            this.roles = res.data
          }
        })
      },
      commitStatusChange(value,user){
        if(user.username !== 'admin'){
          this.$axios.put('/admin/user/status',{enabled:value,username:user.username}).then(res=>{
            if(res && res.status === 200){
              if(value){
                this.$message.info(`user: ${user.username} is activated`)
              }else{
                this.$message.info(`user: ${user.username} is not activated`)
              }
            }
          })
        }else{
          user.enabled = true
          this.$alert('Administrator account cannot be disabled')
        }
      },
      editUser(user){
        this.dialogFormVisible= true
        this.selectedUser = user
        let roleIds = []
        for (let i = 0; i <user.roles.length ; i++) {
          roleIds.push(user.roles[i].id)
        }
        this.selectedRolesIds = roleIds
      },
      toggleSelection() {
        this.$refs.multipleTable.clearSelection();
      },
      onSubmit(user){
        let roles = []
        for (let i = 0; i < this.selectedRolesIds.length;i++) {
          for (let j = 0; j < this.roles.length; j++) {
            if(this.selectedRolesIds[i] === this.roles[j].id){
              roles.push(this.roles[j])
            }
          }
        }
        this.$axios.put('/admin/user',{
          id:user.id,
          username:user.username,
          phone:user.phone,
          email:user.email,
          roles:roles
        }).then(res=>{
          if(res&&res.status===200){
            this.$message.success(res.data)
            this.dialogFormVisible = false
            this.listUsers()
          }
        })
      },
      resetPassword(username){
        this.$axios.put('/admin/user/password',{username:username}).then(res=>{
          if(res && res.status === 200){
            this.$alert('Password is reset to 123')
          }
        })
      },
      deleteUser(id){
        console.log(id)
      }
    },
    mounted(){
      this.listUsers()
      this.listRoles()
    },
    computed:{
      tableHeight(){
        return window.innerHeight-320
      }
    }
  }
</script>

<style scoped>

</style>