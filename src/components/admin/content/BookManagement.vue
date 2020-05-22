<template>
  <div>
    <el-row style="margin: 58px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/admin/dashboard">Admin</el-breadcrumb-item>
        <el-breadcrumb-item>Content Management</el-breadcrumb-item>
        <el-breadcrumb-item>Book Management</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <EditForm @onSubmit="loadBooks()" ref="edit"></EditForm>
    <el-card style="margin: 18px 2%;width: 95%">
      <el-table
        :data="books"
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
                <span>{{props.row.abs}}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="Tile"
        >
        </el-table-column>
        <el-table-column
          prop="category.name"
          label="Category"
        >
        </el-table-column>
        <el-table-column
          prop="author"
          label="Author"
        >
        </el-table-column>
        <el-table-column
          prop="date"
          label="Publication date"
        >
        </el-table-column>
        <el-table-column
          label="Operation"
          width="120"
          fixed="right"
        >
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click.native.prevent="editBook(scope.row)" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" @click.native.prevent="deleteBook(scope.row.id)" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 20px 0 20px 0;float: left">
        <el-button type="info" @click="toggleSelection()" round>Clear Selection</el-button>
        <el-button type="primary" round>Batch Delete</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  import EditForm from "@/components/admin/content/EditForm";
  export default {
    name: "BookManagement",
    data(){
      return{
        books: []
      }
    },
    methods:{
      toggleSelection() {
        this.$refs.multipleTable.clearSelection();
      },
      loadBooks() {
        this.$axios.get(`/books`).then(res => {
          if (res && res.status === 200) {
            this.books = res.data.content
          }
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
      }
    },
    components:{
      EditForm
    },
    computed:{
      tableHeight(){
        return window.innerHeight-320
      }
    },
    mounted(){
      this.loadBooks()
    }
  }
</script>

<style scoped>

</style>