<template>
  <div>
    <i class="el-icon-circle-plus-outline" @click="dialogFormVisible = true"></i>
    <el-dialog
      :visible.sync="dialogFormVisible"
      title="Add | Update item"
      @close="clear"
    >
      <el-form ref="dataForm" :model="form" label-suffix=":">
        <el-form-item label="Title" :label-width="formLabelWidth" prop="title">
          <el-input v-model="form.title" placeholder="Title"></el-input>
        </el-form-item>
        <el-form-item label="Author" :label-width="formLabelWidth" prop="author">
          <el-input v-model="form.author" placeholder="Author"></el-input>
        </el-form-item>
        <el-form-item label="Date" :label-width="formLabelWidth" prop="date">
          <el-date-picker v-model="form.date" type="date" placeholder="Publication date" :picker-options="pickerOptions" value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item label="Press" :label-width="formLabelWidth" prop="press">
          <el-input v-model="form.press" placeholder="Press"></el-input>
        </el-form-item>
        <el-form-item label="Cover" :label-width="formLabelWidth" prop="cover">
          <el-input v-model="form.cover" placeholder="Cover"></el-input>
        </el-form-item>
        <el-form-item label="Description" :label-width="formLabelWidth" prop="abs">
          <el-input v-model="form.abs" placeholder="Description" type="textarea" :autosize="{ minRows: 3, maxRows: 8}" clearable maxlength="1000" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="Category" :label-width="formLabelWidth" prop="cid">
          <el-select v-model="form.category.name" placeholder="Category" @change="changeCategoryName">
            <el-option
              v-for="category in categories"
              :key="category.id"
              :label="category.name"
              :value="category.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="id" style="height: 0">
          <el-input v-model="form.id" type="hidden"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="dialogFormVisible =false">Cancel</el-button>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "EditForm",
    data(){
      return{
        dialogFormVisible:false,
        form:{
          id:'',
          title:'',
          author:'',
          date:'',
          press:'',
          cover:'',
          abs:'',
          category:{
            id:'',
            name:''
          }
        },
        categories:this.$store.getters.getCategories.slice(1),
        formLabelWidth:'120px',
        pickerOptions:{
          disabledDate(time){
            return time.getTime()>Date.now()
          },
        },
      }
    },
    methods:{
      clear(){
        this.form = {
          id:'',
          title:'',
          author:'',
          date:'',
          press:'',
          cover:'',
          abs:'',
          category:{
            id:'',
            name:''
          }
        }
      },
      onSubmit(){
        this.$axios.post('/books',{
          id:this.form.id,
          title:this.form.title,
          author:this.form.author,
          date:this.form.date,
          press:this.form.press,
          cover:this.form.cover,
          abs:this.form.abs,
          category: this.form.category
        }).then(res=>{
          if(res&&res.status===200){
            this.$message.success('operating successfully')
            this.dialogFormVisible= false
            this.$emit('onSubmit')
          }
        })
      },
      changeCategoryName(id){
        let obj  =this.$store.getters.getCategories.find((item)=>{
          return item.id === id
        })
        this.form.category.name = obj.name
        this.form.category.id = obj.id
      }
    }
  }
</script>

<style scoped>
.el-icon-circle-plus-outline {
  margin: 50px 0 0 20px;
  font-size: 100px;
  float: left;
  cursor: pointer;
}
</style>