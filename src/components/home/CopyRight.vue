<template>
  <div class="footer">
    <div style="border-top: 1px #1F1F1F solid">
      <p class="alt" style="color: #999;line-height: 0;padding-left: 250px">&copy; Copyright: Zhongxu(Donald) Huang
        <span>Technical support: &nbsp;&nbsp;&nbsp;</span>
        <a href="" target="_blank" style="color:#999;">Csdn & StackOverFlow</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CopyRight"
  }
</script>

<style scoped>
  .footer {
    background: #2b2e33;
  }
  body {
    font-size: 12px;
  }
  div {
    font-size: 12px;
  }
  span {
    font-size: 12px;
  }
  .footer .alt {
    overflow: hidden;
    padding: 20px 0;
    width: 1160px;
    margin: auto;
  }
  .footer .alt .foot {
    width: 138px;
    float: left;
  }
  .footer .alt .foot p {
    color: #FFF;
    line-height: 28px;
  }
  a{
    text-decoration: none;
  }
  .footer .alt .foot a {
    color: #999;
    display: block;
    line-height: 24px;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: "Gill Sans", sans-serif;
  }
</style>