<template>
  <el-menu class="navbar" :default-active="currentPath" mode="horizontal" background-color="white" text-color="#222" active-text-color="red" :router="true">
    <el-menu-item v-for="item in navList" :key="item.id" :index="item.name">{{item.navItem}}</el-menu-item>
    <router-link to="/index/about" class="nav-a">More</router-link>
    <i class="el-icon-menu nav-i"></i>
    <span class="nav-span">White Jotter - Your Mind Palace</span>

  </el-menu>
</template>

<script>
  export default {
    name: "NavMenu",
    data(){
      return{
        navList:[
          {id:1,name:'/index',navItem:'Home'},
          {id:2,name:'/jotter',navItem:'Jotter'},
          {id:3,name:'/library',navItem:'Library'},
          {id:4,name:'/admin',navItem:'About'},
        ]
      }
    },
    methods:{
      logout(){
        this.$axios.get('/logout').then(res=>{
          if(res.status===200){
            this.$message.success(res.data)
            this.$store.commit('LOGOUT')
            this.$router.replace('/login')
          }
        })
      }
    },
    computed:{
      currentPath () {
        let x = this.$route.path.indexOf('/', 1)
        if (x !== -1) {
          return this.$route.path.substring(0, x)
        } else {
          return this.$route.path
        }
      }
    }
  }
</script>

<style scoped>
  .navbar {
    min-width: 1300px;
  }
  .nav-a {
    color: #222;
    float: right;
    padding: 20px;
    text-decoration: none;
    outline:none;
  }
  .nav-i {
    float: right;
    font-size: 45px;
    color: #222;
    padding-top: 8px;
  }
  .nav-span {
    position: absolute;
    padding-top: 20px;
    right: 43%;
    font-size: 20px;
    font-weight: bold;
   }
  .el-icon-switch-button {
    cursor: pointer;
    outline:0;
    float:right;
    font-size: 40px;
    color: #222;
    padding: 10px
  }

</style>