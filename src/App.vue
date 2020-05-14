<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    methods:{
      getCategories() {
        this.$axios.get('/categories').then(res=>{
          this.$store.commit('SET_CATEGORIES',res.data)
        })
      }
    },
    created(){
      this.getCategories()
    }
  }
</script>
<style>
  body {
    margin: 0px;
  }
</style>
