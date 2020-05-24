<template>
  <div>
    <el-row style="margin: 58px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/admin/dashboard'}">Admin</el-breadcrumb-item>
        <el-breadcrumb-item >Content Management</el-breadcrumb-item>
        <el-breadcrumb-item >Article Management</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-link href="/admin/content/editor" :underline="false" target="_blank" class="add-link">
      <el-button type="success">New Blog</el-button>
    </el-link>
    <el-card style="margin: 18px 2%;width: 95%">
      <el-table
        :data="articles"
        stripe
        style="width: 100%"
        :max-height="tableHeight"
        ref="multipleTable"
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline>
              <el-form-item>
                <span>{{props.row.articleAbstract }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          prop="articleTitle"
          label="Tile"
          align="center"
          width="340"
        >
        </el-table-column>
        <el-table-column
          prop="articleDate"
          label="Publication date"
          align="center"

        >
        </el-table-column>
        <el-table-column
          label="Operation"
          fixed="right"
          width="340"
          align="center"
        >
          <template slot-scope="scope">
            <el-button type="info" icon="el-icon-reading" @click.native.prevent="viewArticle(scope.row.id)" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" @click.native.prevent="editArticle(scope.row)" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" @click.native.prevent="deleteArticle(scope.row.id)" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 20px 0 20px 0;float: left">
        <el-button type="info" @click="toggleSelection()" round>Clear Selection</el-button>
        <el-button type="primary" round>Batch Delete</el-button>
      </div>
      <div style="margin: 20px 0 50px 0">
        <el-pagination
          background
          style="float:right;"
          layout="total, prev, pager, next, jumper"
          @current-change="handleCurrentChange"
          :page-size="pageSize"
          :total="total"
          :hide-on-single-page="true"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "BookManagement",
    data(){
      return{
        articles: [],
        pageSize:5,
        total:0
      }
    },
    methods:{
      toggleSelection() {
        this.$refs.multipleTable.clearSelection();
      },
      loadArticles() {
        this.$axios.get(`/article/${this.pageSize}/1`).then(res => {
          if (res && res.status === 200) {
            this.articles = res.data.content
            this.total=res.data.totalElements
          }
        })
      },
      handleCurrentChange(page){
        this.$axios.get(`/article/${this.pageSize}/${page}`).then(res => {
          if (res && res.status === 200) {
            this.articles = res.data.content
            this.total=res.data.totalElements
          }
        })
      },
      viewArticle(id){
        let articleUrl = this.$router.resolve({
          path:'../../jotter/article',
          query:{
            id:id
          }
        })
        window.open(articleUrl.href,'_blank')
      },
      editArticle(article){
        this.$router.push({
          name:'Editor',
          params:{
           article:article
         }
       })
      },
      deleteArticle(id){
        this.$confirm('This operation will permanently delete the item. Do you want to continue?','del_tip',{
          confirmButtonText:'Yes',
          cancelButtonText:'No',
          type:'warning'
        }).then(()=>{
          //logic delete ---waiting
          this.$axios.delete(`/admin/content/article/${id}`).then(res=>{
            if(res && res.status===200){
              this.loadArticles()
              this.$message.success('delete successful')
            }
          })
        }).catch(()=>{
          this.$message({
            type:'info',
            message:'Not deleted'
          })
        })
      }
    },

    computed:{
      tableHeight(){
        return window.innerHeight-320
      }
    },
    mounted(){
      this.loadArticles()
    }
  }
</script>

<style scoped>
  .add-link {
    margin: 38px 0 15px 34px;
    float: left;
  }
</style>