<template>
  <div>
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
        max-height="tableHeight"
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
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 20px 0 20px 0;float: left">
        <el-button type="info" @click="toggleSelection()" round>Clear Selection</el-button>
        <el-button type="warning" round>Batch Delete</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "UserProfile",
    data(){
      return{
        users:[]
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
      commitStatusChange(value,user){
        console.log(value)
        console.log(user)
      },
      editUser(user){
        console.log(user)
      },
      toggleSelection() {
        this.$refs.multipleTable.clearSelection();
      },
    },
    mounted(){
      this.listUsers()
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