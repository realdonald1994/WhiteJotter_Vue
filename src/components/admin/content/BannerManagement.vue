<template>
  <div>
    <el-row style="margin: 58px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">Admin</el-breadcrumb-item>
        <el-breadcrumb-item>Content Management</el-breadcrumb-item>
        <el-breadcrumb-item>Advertising management</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-card style="margin: 18px 2%;width: 95%">
      <el-table
        stripe
        style="width: 100%"
        :max-height="tableHeight"
        ref="multipleTable"
      >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column label="Ad Name">
        </el-table-column>
        <el-table-column label="Link Address">
        </el-table-column>
        <el-table-column label="Pic Address">
        </el-table-column>
        <el-table-column
          label="Operation"
          width="120"
          fixed="right"
        >
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click.native.prevent="editItem(scope.row)" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" @click.native.prevent="deleteItem(scope.row.id)" circle></el-button>
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
  export default {
    name: 'BannerManagement',
    methods: {
      toggleSelection() {
        this.$refs.multipleTable.clearSelection();
      }
    },
    computed:{
      tableHeight(){
        return window.innerHeight-320
      }
    }
  }
</script>

<style scoped>
</style>