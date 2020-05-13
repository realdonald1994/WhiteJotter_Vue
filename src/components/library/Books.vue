<template>
  <div>
    <el-row style="height: 840px">
      <el-tooltip v-for="item in books" :key="item.id" placement="right">
        <p slot="content" class="tooltip-title">{{item.title}}</p>
        <p slot="content" class="tooltip-info">
          <span>{{item.author}}</span> /
          <span>{{item.date}}</span> /
          <span>{{item.press}}</span>
        </p>
        <p slot="content" class="tooltip-des tooltip-abstract">{{item.abs}}</p>
        <el-card class="card" shadow="hover" :body-style="{padding:'0px'}">
          <div class="cover">
            <img :src="item.cover" alt="cover">
          </div>
          <div class="info">
            <div class="title">
              <a href="">{{item.title}}</a>
            </div>
          </div>
          <div class="author">{{item.author}}</div>
        </el-card>
      </el-tooltip>
    </el-row>
    <el-row>
      <el-pagination
        background
        layout="prev, pager, next,->,total"
        :current-page="1"
        :page-size="10"
        :total="20">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Books",
    data(){
      return{
        books:[]

      }
    },
    methods:{
      loadBooks() {
        this.$axios.get('/books').then(res=>{
          if(res&&res.status===200){
            this.books = res.data
          }
        })
      }
    },
    created(){
      this.loadBooks()
    }
  }
</script>

<style scoped>
  .tooltip-title{
    font-size: 14px;
    margin-bottom: 6px;
  }
  .tooltip-info {
    font-size: 13px;
    margin-bottom: 6px;
  }
  .tooltip-des {
    width: 300px;
  }
  .tooltip-abstract {
    display: block;
    line-height: 17px;
  }
  .card {
    width: 135px;
    margin-bottom: 20px;
    height: 233px;
    float: left;
    margin-right: 15px;
  }
  .cover {
    width: 135px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }
  img {
    width: 135px;
    height: 172px;
  }

  .title {
    font-size: 14px;
    text-align: left;
  }
  .author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  a {
    text-decoration: none;
  }
  a:link,a:visited,a:focus {
    color: #3377aa;
  }
</style>