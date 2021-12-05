<template>
  <el-container>
    <el-aside class="aside-area">
      <!--<el-switch v-model="flag" active-color="#13ce66" inactive-color="#ff4949"></el-switch>-->
      <SideMenu @indexSelect="listByCategory" ref="sideMenu"></SideMenu>
    </el-aside>
    <el-main>
      <Books class="books-area" ref="booksArea" :cid="cid"></Books>
    </el-main>
  </el-container>
</template>

<script>
  import SideMenu from "@/components/library/SideMenu";
  import Books from "@/components/library/Books";
  export default {
    name: "AppLibrary",
    data(){
      return{
        flag:true,
        cid:this.$store.getters.getInitSideIndex
      }
    },
    methods:{
      listByCategory(){
        this.cid = this.$refs.sideMenu.cid
        this.$refs.booksArea.currentPage = 1
        this.$axios.get('categories/'+this.cid+'/books',{params:{page:this.$refs.booksArea.currentPage}}).then(res=>{
          if(res&&res.status===200){
            this.$refs.booksArea.books = res.data.content
            this.$refs.booksArea.currentPage = res.data.pageNumber+1
            this.$refs.booksArea.pageSize = res.data.pageSize
            this.$refs.booksArea.total = res.data.totalElements
          }
        })
      },
      getCategories() {
        this.$axios.get('/categories').then(res=>{
          this.$store.commit('SET_CATEGORIES',res.data)
        })
      }
    },
    components:{
      SideMenu,
      Books
    },
    created(){
      this.getCategories()
    }
  }
</script>

<style scoped>
  .books-area {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .aside-area {
    width: 200px !important;
    margin-top: 20px;
  }
</style>
