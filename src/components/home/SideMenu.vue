<template>
  <el-menu default-active="1" style="width: 170px">
    <a href="#header-div"></a>
    <el-menu-item index="1">
      <i class="el-icon-star-off"></i>
      <span slot="title">Technology</span>
    </el-menu-item>
    <a href="#update-card"></a>
    <el-menu-item index="2">
      <i class="el-icon-s-opportunity"></i>
      <span slot="title">Update</span>
    </el-menu-item>
    <a href="#slogan"></a>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">Source Code</span>
    </el-menu-item>
    <a href="#about"></a>
    <el-menu-item index="4">
      <i class="el-icon-s-promotion"></i>
      <span slot="title">About</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
  export default {
    name: "SideMenu"
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>