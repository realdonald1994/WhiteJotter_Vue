<template>
  <el-menu default-active="1" style="width: 170px" active-text-color="#FFC107">
    <a href="#header-div"></a>
    <el-menu-item index="1">
      <i class="el-icon-loading"></i>
      <span slot="title">Latest</span>
    </el-menu-item>
    <a href="#update-card"></a>
    <el-menu-item index="2">
      <i class="el-icon-medal"></i>
      <span slot="title">Favorite</span>
    </el-menu-item>
    <a href="#slogan"></a>
    <el-menu-item index="3">
      <i class="el-icon-position"></i>
      <span slot="title">Technicals</span>
    </el-menu-item>
    <a href="#about"></a>
    <el-menu-item index="4">
      <i class="el-icon-sunny"></i>
      <span slot="title">Life</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
  export default {
    name: "JotterNav"
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>