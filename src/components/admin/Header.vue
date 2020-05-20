<template>
  <el-card class="admin-header">
    <a href="/index">
      <img src="../../assets/img/icon/icon2.png" alt="" class="header-img">
    </a>
    <span class="header-span">White Jotter</span>
    <i class="el-icon-switch-button" @click="logout"></i>
  </el-card>
</template>

<script>
  import {createRouter} from '../../router'

  export default {
    name: "Header",
    methods:{
      logout() {
        this.$axios.get('logout').then(res=>{
          if(res&&res.status===200){
            this.$store.commit('LOGOUT')
            this.$message.success('logout successfully')
            const newRouter = createRouter()
            this.$router.matcher = newRouter.matcher
            this.$router.replace('/index')
          }
        }).catch(err=>{
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  .el-icon-switch-button {
    cursor: pointer;
    outline:0;
    float:right;
    font-size: 40px;
    color: #222;
    padding: 10px
  }
  .header-span {
    font-size: 32px;
    font-weight: bold;
    position:absolute;
    left: 100px;
  }
  .header-img {
    width:55px;
    float: left;
    margin-top: -5px;
  }
  .admin-header {
    height: 80px !important;
    opacity: 0.85;
    line-height: 40px;
    min-width: 900px;
  }
</style>