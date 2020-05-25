<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-weight: bold;font-size: 20px">Update Event</span>
      <!--<el-button style="float: right; padding: 3px 0" type="text">修改</el-button>-->
    </div>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2020/5/13" placement="top">
          <el-card>
            <h4>Add cover to upload to server and enter URL in two ways</h4>
            <p>Donald commit 2020/5/13 21:32</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/4/11" placement="top">
          <el-card>
            <h4>Implement book classification function</h4>
            <p>Donald commit 2020/4/11 09:02</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/4/8" placement="top">
          <el-card>
            <h4>Implement book pagination and fix BUG added by books</h4>
            <p>Donald commit 2020/4/8 22:10</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/3/6" placement="top">
          <el-card>
            <h4>Implement search box fuzzy query</h4>
            <p>Donald commit 2020/3/6 19:51</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/3/5" placement="top">
          <el-card>
            <h4>Implement book modification function</h4>
            <p>Donald commit 2020/3/5 22:52</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "UpdateCard"
  }
</script>

<style scoped>
  .box-card {
    margin-top: 5px;
    width: 988px;
    height: 1050px;
    text-align: left;
  }
</style>