<template>
  <div class="articles-area">
    <el-backtop :visibility-height="50"></el-backtop>
    <el-card style="text-align: left;width: 990px;margin: 35px auto 0 auto">
      <div>
        <span><strong>{{article.articleTitle}}</strong></span>
        <el-divider content-position="left">{{article.articleDate|dataFormat('yyyy-MM-dd hh:mm:ss')}}</el-divider>
        <div class="markdown-body">
          <div v-html="article.articleContentHtml"></div>
        </div>
      </div>
    </el-card>

  </div>
</template>

<script>
  export default {
    name: "ArticleDetails",
    data(){
      return{
        article:[]
      }
    },
    methods:{
      loadArticle(){
        this.$axios.get(`/article/${this.$route.query.id}`).then(res=>{
          if(res && res.status === 200){
            this.article = res.data
          }
        })
      }
    },
    mounted(){
      this.loadArticle()
    },
    filters: {
      dataFormat(value, fmt) {
        let getDate = new Date(value);
        let o = {
          'M+': getDate.getMonth() + 1,
          'd+': getDate.getDate(),
          'h+': getDate.getHours(),
          'm+': getDate.getMinutes(),
          's+': getDate.getSeconds(),
          'q+': Math.floor((getDate.getMonth() + 3) / 3),
          'S': getDate.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (let k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
          }
        }
        return fmt;
      }
    }
  }
</script>

<style scoped>
  @import "../../styles/markdown.css";
</style>