<template>
  <div>
    <el-row>
      <el-input
        v-model="article.articleTitle"
        style="margin: 10px 0px;font-size: 18px;"
        placeholder="Title"></el-input>
    </el-row>
    <mavon-editor
      v-model="article.articleContentMd"
      style="height: 100%"
      ref="md"
      @save="saveArticles"
      fontSize="16px"
    >
      <el-input v-model="article.articleAbstract" type="textarea" rows="6" maxlength="255" show-word-limit></el-input>
    </mavon-editor>
  </div>

</template>

<script>
  export default {
    name: "ArticleEditor",
    data(){
      return{
        article:{}
      }
    },
    methods:{
      saveArticles(){
        console.log()
      }
    }
  }
</script>

<style scoped>

</style>