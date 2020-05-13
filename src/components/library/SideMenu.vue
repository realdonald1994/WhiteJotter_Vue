<template>
  <el-menu default-active="0" class="categories" @select="handleSelect" active-text-color="red">
    <el-menu-item index="0">
      <i class="el-icon-menu"></i>
      <span slot="title">All</span>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">Literature</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">Prevalent</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span slot="title">Culture</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-menu"></i>
      <span slot="title">Life</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-menu"></i>
      <span slot="title">Sports</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-menu"></i>
      <span slot="title">Technology</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
  export default {
    name: "SideMenu",
    methods:{
      handleSelect(key,keyPath){
        console.log(key,keyPath)
      }
    }
  }
</script>

<style scoped>
  .categories {
    position: fixed;
    margin-left: 50%;
    left: -900px;
    top: 100px;
    width: 150px;
  }
</style>