<template>
  <el-container id="admin-body">
    <el-header class="admin-header">
      <Header style="position: absolute;width: 98%;">></Header>
    </el-header>
    <el-container>
      <el-aside class="admin-aside">
        <AdminMenu></AdminMenu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Header from "@/components/admin/Header";
  import AdminMenu from "@/components/admin/AdminMenu";
  export default {
    name: "AdminIndex",
    components:{
      Header,
      AdminMenu
    }
  }
</script>

<style scoped>
  #admin-body {
    height: 95vh;
  }
  .admin-header {
    z-index: 1;
    height: 80px;
    /*margin-left: 0px;*/
  }
  .admin-aside{
    height: 113%;
    margin-top: -60px;
    width: 250px !important;
    margin-left: 20px;
  }
</style>