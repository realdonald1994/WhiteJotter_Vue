<template>
  <el-card class="card-carousel">
    <el-carousel class="push" :interval="4000">
      <el-carousel-item v-for="item in items" :key="item.id">
        <a :href=item.link target="_blank">
          <img :src=item.img alt="" class="carousel_img">
        </a>
        <h3>{{item.title}}</h3>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>

<script>
  export default {
    name: "Carousel",
    data(){
      return{
        items:[
          {id:1,title:'Spring Boot - Java-based framework',img:require('../../../static/img/carousel/Spring.png'),link:'https://spring.io/projects/spring-boot'},
          {id:2,title:'Vue.js - The Progressive JavaScript Framework',img:require('../../../static/img/carousel/vue.png'),link:'https://vuejs.org/'},
          {id:3,title:'Element-ui - A Desktop UI Library',img:require('../../../static/img/carousel/element.png'),link:'https://element.eleme.io/#/en-US'},
        ]
      }
    }
  }
</script>

<style scoped>

  .card-carousel {
    /*margin: 0 auto;*/
    margin-left: 20px;
    width: 680px;
    height: 320px;
  }
  .el-carousel__item h3 {
    color: black;
    font-size: 15px;
    /*line-height: 300px;*/
    bottom: 43px;
    float: left;
    position: relative;
  }
  .el-carousel__item:nth-child(2n) {
    background: black;
  }
  .el-carousel__item:nth-child(2n+1) {
    background: black;
  }
  .carousel_img {
    height: 100%;
    width: 100%;
    text-align: center;
  }
  .push {
    /*margin-left: -15px;*/
  }

</style>
