<template>
  <el-upload
    class="upload-demo"
    ref="upload"
    action="http://localhost:8085/api/covers"
    :with-credentials="true"
    multiple
    :limit="1"
    :before-remove="beforeRemove"
    :on-success="handleSuccess"
    :file-list="fileList"
    :on-exceed="handleExceed"
    list-type="picture-card"
  >
    <i class="el-icon-plus"></i>
    <div slot="tip" class="el-upload__tip">Only jpg / png files can be uploaded, and no more than 500kb</div>
  </el-upload>


</template>

<script>
  export default {
    name: "ImgUpload",
    props:['cover'],
    data(){
      return{
        fileList:[],
        url:''
      }
    },
    methods:{
      beforeRemove(file){
        return this.$confirm(`Are you sure delete ${file.name} ?`).then().catch()
      },
      handleSuccess(response){
        this.url = response
        this.$emit('onUpload')
        this.$message.success('Uploaded successfully')

      },
      handleExceed(files,fileList){
        this.$message.warning(`The current limit is to select 1 file. This time, a total of ${files.length + fileList.length} files are selected.`)
      },
      clear(){
        this.$refs['upload'].clearFiles()
        this.fileList=[]
      }
    },
    watch:{
      cover(newVal){
        if(newVal!=''){
          this.fileList.push({url:newVal})
        }
      }
    },
    mounted(){
      if(this.cover!=''){
        this.fileList.push({url:this.cover})
      }
    }
  }
</script>

<style scoped>

</style>