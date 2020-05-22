<template>
  <div>
    <el-row style="margin: 58px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/admin/dashboard">Admin</el-breadcrumb-item>
        <el-breadcrumb-item>Content Management</el-breadcrumb-item>
        <el-breadcrumb-item>Blog Management</el-breadcrumb-item>
        <el-breadcrumb-item>Editor</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>

    <el-row>
      <el-input
        v-model="article.articleTitle"
        style="margin: 10px 0px;font-size: 18px;"
        placeholder="Title"></el-input>
    </el-row>
    <el-row style="height: calc(100vh - 140px);">
      <mavon-editor
        v-model="article.articleContentMd"
        style="height: 100%"
        ref="md"
        @save="saveArticles"
        fontSize="16px"
        :ishljs = "true"
      >
        <button type="button" class="op-icon el-icon-document" :title="'Abstract/Cover'" slot="left-toolbar-after" @click="dialogVisible = true"></button>
      </mavon-editor>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%">
        <el-divider content-position="left">Abstract</el-divider>
        <div style="margin-top: 20px">
          <el-input v-model="article.articleAbstract" type="textarea" rows="6" maxlength="255" show-word-limit></el-input>
          <el-divider content-position="left">Cover</el-divider>
          <ImgUpload @onUpload="uploadImg" ref="imgUpload"></ImgUpload>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Save</el-button>
        </span>
      </el-dialog>
    </el-row>

  </div>

</template>

<script>
  import ImgUpload from "@/components/library/ImgUpload";

  export default {
    name: "ArticleEditor",
    data(){
      return{
        article:{},
        dialogVisible :false
      }
    },
    methods:{
      saveArticles(value,render){
        this.$confirm('Whether to save and publish the article','Confirm',{
          confirmButtonText:'Yes',
          cancelButtonText:'No',
          type:'warning'
        }).then(()=>{
          this.$axios.post('/admin/content/article',{
            id:this.article.id,
            articleTitle:this.article.articleTitle,
            articleContentMd:value,
            articleContentHtml:render,
            articleAbstract:this.article.articleAbstract,
            articleCover: this.article.articleCover,
            articleDate: this.article.articleDate
          }).then(res=>{
            if(res && res.status === 200){
              this.$message.success(res.data)
            }
          })
        }).catch(()=>{
          this.$message.info('Don\'t save')
        })
      },
      uploadImg(){
        this.article.articleCover = this.$refs.imgUpload.url
      }
    },
    components:{
      ImgUpload
    },
    mounted(){
      if(this.$route.params.article){
        this.article = this.$route.params.article
      }
    }
  }
</script>

<style scoped>

</style>