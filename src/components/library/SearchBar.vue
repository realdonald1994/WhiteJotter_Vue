<template>
  <div class="searchBar">
    <el-input class="searchBox" v-model="keyword" placeholder="Search..." prefix-icon="el-icon-search" clearable @keyup.enter.native="searchClick"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="searchClick">Search</el-button>
  </div>
</template>

<script>
  export default {
    name: "SearchBar",
    data(){
      return{
        keyword:'',
      }
    },
    methods:{
      searchClick(){
        this.$emit('onSearch')
      }
    }
  }
</script>

<style scoped>
  .searchBar {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .searchBox {
    width: 400px;
    margin-right: 10px;
  }
</style>