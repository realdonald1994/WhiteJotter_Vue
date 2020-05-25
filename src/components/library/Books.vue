<template>
  <div>
    <el-row style="height: 840px">
      <SearchBar @onSearch="searchResult" ref="searchBar"></SearchBar>
      <ViewSwitch class="switch"></ViewSwitch>
      <el-tooltip v-for="item in books" :key="item.id" placement="right">
        <p slot="content" class="tooltip-title">{{item.title}}</p>
        <p slot="content" class="tooltip-info">
          <span>{{item.author}}</span> /
          <span>{{item.date}}</span> /
          <span>{{item.press}}</span>
        </p>
        <p slot="content" class="tooltip-des tooltip-abstract">{{item.abs}}</p>
        <el-card class="card" shadow="hover" :body-style="{padding:'0px'}">
          <div class="cover" @click="editBook(item)">
            <img :src="item.cover" alt="cover">
          </div>
          <div class="info">
            <div class="title">
              <a href="">{{item.title}}</a>
            </div>
            <i class="el-icon-delete" @click="deleteBook(item.id)"></i>
          </div>
          <div class="author">{{item.author}}</div>

        </el-card>
      </el-tooltip>
      <EditForm ref="edit" @onSubmit="listByCategory"></EditForm>
    </el-row>
    <el-row>
      <el-pagination
        background
        layout="prev, pager, next,->,total"
        :current-page=currentPage
        :page-size=pageSize
        :total=total
        @current-change="handleCurrentChange"
        :hide-on-single-page="true"
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
  import SearchBar from "@/components/library/SearchBar";
  import EditForm from "@/components/library/EditForm";
  import ViewSwitch from "@/components/library/ViewSwitch";
  export default {
    name: "Books",
    props:['cid'],
    data(){
      return{
        books:[],
        currentPage:1,
        pageSize:5,
        total:0,
      }
    },
    methods:{
      loadBooks() {
        this.$axios.get(`/books`,{params:{page:this.currentPage-1}}).then(res=>{
          if(res&&res.status===200){
            this.books = res.data.content
            this.currentPage = res.data.number+1
            this.pageSize = res.data.size
            this.total = res.data.totalElements
          }
        })
      },
      searchResult(){
        this.currentPage =1
        this.$axios.get('/search?keyword='+this.$refs.searchBar.keyword,{params:{page:this.currentPage-1}}).then(res=>{
          if(res&&res.status===200){
            this.books = res.data.content
            this.currentPage = res.data.number+1
            this.pageSize = res.data.size
            this.total = res.data.totalElements
          }
        })
      },
      handleCurrentChange(currentPage){
        this.currentPage = currentPage
        this.loadBooks()
      },
      listByCategory(){
        this.$axios.get(`categories/${this.cid}/books`,{params:{page:this.currentPage-1}}).then(res=>{
          if(res&&res.status===200){
            this.books = res.data.content
            this.currentPage = res.data.number+1
            this.pageSize = res.data.size
            this.total = res.data.totalElements
          }
        })
      },
      deleteBook(id){
        this.$confirm('This operation will permanently delete the item. Do you want to continue?','del_tip',{
          confirmButtonText:'Yes',
          cancelButtonText:'No',
          type:'warning'
        }).then(()=>{
          //logic delete ---waiting
          this.$axios.delete('/delete', {data:{id:id}}).then(res=>{
            if(res && res.status===200){
              this.loadBooks()
              this.$message.success('delete successful')
            }
          })
        }).catch(()=>{
          this.$message({
            type:'info',
            message:'Not deleted'
          })
        })
      },
      editBook(item){
        this.$refs.edit.dialogFormVisible = true
        this.$refs.edit.form = {
          id:item.id,
          title:item.title,
          author:item.author,
          date:item.date,
          press:item.press,
          cover:item.cover,
          abs:item.abs,
          category:{
            id:item.category.id.toString(),
            name:item.category.name
          },
        }
      }
    },
    created(){
      this.loadBooks()
    },
    components:{
      SearchBar,
      EditForm,
      ViewSwitch
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
  .el-icon-delete {
    cursor: pointer;
    float: right;
  }
  a {
    text-decoration: none;
  }
  a:link,a:visited,a:focus {
    color: #3377aa;
  }
  .switch {
    display: flex;
    position: absolute;
    left: 880px;
    top: 45px;
  }

</style>