<template>
  <el-row style="margin-top: 40px">
    <el-col :span="12">
      <el-card class="box-card" :body-style="{ padding: '0px' }">
        <el-image :src="url"></el-image>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="card">
        <h3>About me</h3>
        <el-divider></el-divider>
        <p class="m-text" >Donald, an independent developer, an uncle in the world of 0 and 1; a lifelong learner who vows to learn an infinite loop. Hope to meet friends who can grow together.</p>
        <p class="m-text">Love programming, like tossing, and are exploring ways to learn programming techniques efficiently ...</p>
        <p style="height: 220px"></p>
        <el-divider></el-divider>
        <div style="text-align: center">
          <el-button circle><a href="https://github.com/realdonald1994"><i class="el-icon-s-promotion"></i></a></el-button>
          <el-button circle><a href="https://www.linkedin.com/in/zhongxu-huang/"><i class="el-icon-location-information"></i></a></el-button>
          <el-button circle> <a href="https://www.instagram.com/realdonald1994/"><i class="el-icon-coffee-cup"></i></a></el-button>
        </div>

      </el-card>
    </el-col>

  </el-row>
</template>

<script>
  export default {
    name: "About",
    data(){
      return{
        url:'https://picsum.photos/id/1005/1000/700'
      }
    }
  }
</script>

<style scoped>
  .box-card {
    width: 1000px;
    height: 700px;
    left: 150px;
    position: fixed;
  }
  .card {
    width: 400px;
    height: 700px;
    position: fixed;
    right: 290px;
  }
  .m-text {
    margin-top: 10px;
    letter-spacing: 1px !important;
    line-height: 1.8 !important;
    text-align:justify;
    text-justify:inter-ideograph
  }
</style>