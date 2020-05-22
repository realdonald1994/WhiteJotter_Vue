<template>
  <div style="margin-top: 40px">
    <div class="articles-area">
      <el-card class="box-card" style="text-align: left">
        <div v-for="article in articles" :key="article.id">
          <dic style="float:left;width:85%;height: 150px;">
            <router-link class="article-link" to="{path:'jotter/article',query:{id:article.id}}"><span style="font-size: 20px"><strong>{{article.articleTitle}}</strong></span></router-link>
            <el-divider content-position="left">{{article.articleDate}}</el-divider>
            <router-link class="article-link" to="{path:'jotter/article',query:{id:article.id}}"><p>{{article.articleAbstract}}</p></router-link>
          </dic>
          <el-image
            style="margin:18px 0 0 30px;width:100px;height: 100px"
            :src="article.articleCover"
            fit="cover"
          >
          </el-image>
          <el-divider></el-divider>
        </div>
      </el-card>
    </div>
    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      :total="total"
      :hide-on-single-page="true"
    >
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "Articles",
    data(){
      return{
        articles: [],
        pageSize: 4,
        total:''
      }
    },
    methods:{
      loadArticles(){
        this.$axios.get(`/article/${this.pageSize}/1`).then(res=>{
          if(res && res.status === 200){
            this.articles = res.data.content
            this.total = res.data.totalElements
          }
        })
      },
      handleCurrentChange(page){
        this.$axios.get(`/article/${this.pageSize}/${page}`).then(res=>{
          if(res && res.status === 200){
            this.articles = res.data.content
            this.total = res.data.totalElements
          }
        })
      }
    },
    mounted(){
      this.loadArticles()
    }
  }
</script>

<style scoped>
  .articles-area {
    width: 990px;
    height: 750px;
    margin-left: auto;
    margin-right: auto;
  }

  .article-link {
    text-decoration: none;
    color: #606266;
  }

  .article-link:hover {
    color: #409EFF;
  }
</style>