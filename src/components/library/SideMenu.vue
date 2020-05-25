<template>
  <el-menu :default-active="defaultValue" class="categories" @select="handleSelect" active-text-color="red">
    <el-menu-item v-for="category in categories" :key="category.id" :index="category.id.toString()">
      <i class="el-icon-magic-stick"></i>
      <span slot="title">{{category.name}}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "SideMenu",
    data(){
      return{
        cid:0,
        categories:this.$store.getters.getCategories,
        defaultValue:this.$store.getters.getInitSideIndex
      }
    },
    methods:{
      handleSelect(key){
        // console.log(key,keyPath)
        this.$store.commit('SET_SIDE_INDEX',key.toString())
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