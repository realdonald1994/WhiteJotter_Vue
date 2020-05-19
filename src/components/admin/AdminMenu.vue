<template>
  <el-menu :default-active="currentPath" class="el-menu-admin" router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
    <div style="height: 120px;"></div>
    <el-submenu v-for="(item,index) in adminMenus" :key="index" :index="(index).toString()" style="text-align: left">
      <template slot="title">
        <i :class="item.iconCls"></i>
        <span slot="title" style="font-size: 17px">{{item.name}}</span>
      </template>

      <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">
        <i :class="child.iconCls"></i>
        {{child.name}}
      </el-menu-item>
    </el-submenu>
    <!--<el-switch v-model="isCollapse" style="margin-top: 300px;margin-left: 10px "></el-switch>-->
  </el-menu>
</template>

<script>
  export default {
    name: "AdminMenu",
    data(){
      return{
        isCollapse: false
      }
    },
    computed:{
      adminMenus () {
        return this.$store.getters.getAdminMenus
      },
      currentPath(){
        return this.$route.path
      }
    }
  }
</script>

<style scoped>
  .el-menu-admin {
    border-radius: 5px;
    height: 100%;
  }
</style>