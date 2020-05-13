<template>
  <el-container>
    <el-aside class="aside-area">
      <!--<el-switch v-model="flag" active-color="#13ce66" inactive-color="#ff4949"></el-switch>-->
      <SideMenu></SideMenu>
    </el-aside>
    <el-main>
      <Books class="books-area"></Books>
    </el-main>
  </el-container>
</template>

<script>
  import SideMenu from "@/components/library/SideMenu";
  import Books from "@/components/library/Books";
  export default {
    name: "AppLibrary",
    data(){
      return{
        flag:true
      }
    },
    components:{
      SideMenu,
      Books
    }
  }
</script>

<style scoped>
  .books-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
  .aside-area {
    width: 200px !important;
    margin-top: 20px;
  }
</style>