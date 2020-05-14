<template>
  <div>
    <i class="el-icon-circle-plus-outline" @click="dialogFormVisible = true"></i>
    <el-dialog
      :visible.sync="dialogFormVisible"
      title="Add | Update item"
      @close="clear"
    >
      <el-form ref="dataForm" :model="form">
        <el-form-item label="title" :label-width="formLabelWidth" prop="title">
          <el-input v-model="form.title" placeholder="placeholder"></el-input>
        </el-form-item>
        <el-form-item label="author" :label-width="formLabelWidth" prop="author">
          <el-input v-model="form.author" placeholder="placeholder"></el-input>
        </el-form-item>
        <el-form-item label="date" :label-width="formLabelWidth" prop="date">
          <el-input v-model="form.date" placeholder="placeholder"></el-input>
        </el-form-item>
        <el-form-item label="press" :label-width="formLabelWidth" prop="press">
          <el-input v-model="form.press" placeholder="placeholder"></el-input>
        </el-form-item>
        <el-form-item label="cover" :label-width="formLabelWidth" prop="cover">
          <el-input v-model="form.cover" placeholder="placeholder"></el-input>
        </el-form-item>
        <el-form-item label="abs" :label-width="formLabelWidth" prop="abs">
          <el-input v-model="form.abs" placeholder="placeholder"></el-input>
        </el-form-item>
      </el-form>
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
          category: {
            id:'',
            name:''
          }
        },
        formLabelWidth:'120px'
      }
    },
    methods:{
      clear(){

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