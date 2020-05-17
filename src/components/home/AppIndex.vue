<template>
  <div style="margin-top: 40px">
    <SideMenu id="side-menu"></SideMenu>
    <div class="home">
      <el-card id="header-div">
        <div style="height: 150px"></div>
        <Carousel></Carousel>
        <quick-nav style="float: right;margin-top: -450px;margin-right: 480px"></quick-nav>
      </el-card>
      <UpdateCard id="update-card"></UpdateCard>
      <Slogan id="slogan"></Slogan>
      <CopyRight id="about"></CopyRight>
    </div>
  </div>
</template>

<script>
  import CopyRight from "@/components/home/CopyRight";
  import Carousel from "@/components/home/Carousel";
  import SideMenu from "@/components/home/SideMenu";
  import QuickNav from "@/components/home/QuickNav";
  import UpdateCard from "@/components/home/UpdateCard";
  import Slogan from "@/components/home/Slogan";
  export default {
    name: "AppIndex",
    components:{
      CopyRight,
      Carousel,
      SideMenu,
      QuickNav,
      UpdateCard,
      Slogan
    }
  }
</script>

<style scoped>
  .home {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;
  }

  #header-div {
    padding-bottom: 20px;
    padding-left: 5px;
    background-color: white;
  }
  #side-menu {
    position: fixed;
    margin-left: 50%;
    left: -800px;
    top: 100px;
  }
</style>