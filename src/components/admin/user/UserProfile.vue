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
        :data="user"
        stripe
        style="width: 100%"
        default-sort="{prop:'id',order:'ascending'}"
        max-height="tableHeight"
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
          width="100"
        >
        </el-table-column>

        <el-table-column
          prop="username"
          label="NickName"
        >
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
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "UserProfile",
    data(){
      return{
        user:[{id:1,username:'zs'}]
      }
    },
    methods:{
      listUsers(){
        console.log('')
      },
      editUser(user){
        console.log(user)
      }
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