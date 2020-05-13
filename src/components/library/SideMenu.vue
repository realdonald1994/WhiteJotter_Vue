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
      <span slot="title">Movie</span>
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
    data(){
      return{
        cid:0
      }
    },
    methods:{
      handleSelect(key){
        // console.log(key,keyPath)
        this.cid=key
        this.$emit('indexSelect')
      }
    }
  }
</script>

<style scoped>
  .categories {
    position: fixed;
    margin-left: 50%;
    left: -800px;
    top: 100px;
    width: 150px;
  }
</style>