<template>
  <div>
    <el-row style="margin: 58px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/admin/dashboard">Admin</el-breadcrumb-item>
        <el-breadcrumb-item>User Management</el-breadcrumb-item>
        <el-breadcrumb-item>Role Info</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>

    <el-card style="margin: 38px 2%;width: 95%">
      <el-table
        :data="roles"
        stripe
        style="width: 100%"
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
          width="150"
        >
        </el-table-column>

        <el-table-column
          prop="name"
          label="Role"
        >
        </el-table-column>
        <el-table-column
          prop="nameZh"
          label="Description"
        >
        </el-table-column>
        <el-table-column
          label="Activated"
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
            <el-button type="primary" icon="el-icon-edit" @click="editRole(scope.row)" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
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
    name: "Role",
    data(){
      return{
        roles:[]
      }
    },
    methods:{
      listRoles(){
        this.$axios.get('/admin/role').then(res=>{
          if(res && res.status ===200){
            this.roles = res.data
          }
        })
      },
      editRole(role){
        console.log(role)
      },
      commitStatusChange(value,role){
        console.log(value)
        console.log(role)
      },
      toggleSelection() {
        this.$refs.multipleTable.clearSelection();
      },
    },
    computed:{
      tableHeight(){
        return window.innerHeight-320
      }
    },
    mounted(){
      this.listRoles()
    }
  }
</script>

<style scoped>

</style>