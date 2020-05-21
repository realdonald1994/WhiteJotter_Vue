<template>
  <div>
    <el-dialog title="Modify Role" :visible.sync="dialogFormVisible" center>
      <el-form ref="dataForm" :model="selectedRole" label-suffix=":">
        <el-form-item label="Name" label-width="120px" prop="name">
          <el-input v-model="selectedRole.name" placeholder="Role"></el-input>
        </el-form-item>
        <el-form-item label="Description" label-width="120px" prop="description">
          <el-input v-model="selectedRole.nameZh" placeholder="Description"></el-input>
        </el-form-item>
        <el-form-item label="Authority" label-width="120px" prop="perms">
          <el-checkbox-group v-model="selectedPermsIds">
            <el-checkbox v-for="(perm,index) in perms" :label="perm.id" :key="index">{{perm.desc_}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Menu" label-width="120px" prop="menus">
          <el-tree
            :data="menus"
            :props="props"
            show-checkbox
            :default-checked-keys="selectedMenusIds"
            node-key="id"
            ref="tree"
            ></el-tree>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="dialogFormVisible =false">Cancel</el-button>
        <el-button type="primary" @click="onSubmit(selectedRole)">Submit</el-button>
      </div>
    </el-dialog>
    <el-row style="margin: 58px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/admin/dashboard">Admin</el-breadcrumb-item>
        <el-breadcrumb-item>User Management</el-breadcrumb-item>
        <el-breadcrumb-item>Role Info</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>

    <el-card style="margin: 38px 2%;width: 95%">
      <el-table
        :data="roles"
        stripe
        style="width: 100%"
        max-height="tableHeight"
        ref="multipleTable"
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label="Id"
          width="150"
        >
        </el-table-column>

        <el-table-column
          prop="name"
          label="Role"
        >
        </el-table-column>
        <el-table-column
          prop="nameZh"
          label="Description"
        >
        </el-table-column>
        <el-table-column
          label="Activated"
        >
          <template slot-scope="scope">
            <el-switch v-model="scope.row.enabled" active-color="#13ce66" inactive-color="#ff4949" @change="(value)=> commitStatusChange(value,scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="Operation"
          width="120"
        >
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click="editRole(scope.row)" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
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
    name: "Role",
    data(){
      return{
        roles:[],
        perms:[],
        menus:[],
        dialogFormVisible: false,
        selectedRole: [],
        selectedPermsIds:[],
        selectedMenusIds:[],
        props:{
          id:'id',
          label:'nameZh',
          children:'children'
        },
      }
    },
    methods:{
      listRoles(){
        this.$axios.get('/admin/role').then(res=>{
          if(res && res.status ===200){
            this.roles = res.data
          }
        })
      },
      listPerms(){
        this.$axios.get('/admin/role/perm').then(res=>{
          if(res && res.status === 200){
            this.perms = res.data
          }
        })
      },
      listMenus(){
        this.$axios.get('/admin/role/menu').then(res=>{
          if(res && res.status ===200){
            this.menus = res.data
          }
        })
      },
      editRole(role){
        this.dialogFormVisible = true
        this.selectedRole = role
        let permIds = []
        for (let i = 0; i < role.perms.length; i++) {
          permIds.push(role.perms[i].id)
        }
        this.selectedPermsIds = permIds
        let menuIds = []
        for (let i = 0; i < role.menus.length; i++) {
          menuIds.push(role.menus[i].id)
          for (let j = 0; j < role.menus[i].children.length; j++) {
            menuIds.push(role.menus[i].children[j].id)
          }
        }
        if(this.$refs.tree){
          let needdelarr = [];
          menuIds.map((v, i) => {
            this.diguiquchu(
              menuIds,
              role.menus,
              v,
              i,
              needdelarr
            );
          });
          menuIds = menuIds.filter(item => !needdelarr.includes(item));
          this.selectedMenusIds = menuIds;
        }
      },
      diguiquchu(datas, arr, v, i, needdelarr) {
        //递归找出半选中的数据
        arr.map((item) => {
          if (item.id == v && item.children) {
            needdelarr.push(v);
            this.diguiquchu(datas, item.children, v, i, needdelarr);
          } else if (item.id != v && item.children) {
            this.diguiquchu(datas, item.children, v, i, needdelarr);
          }
        });
      },
      commitStatusChange(value,role){
        console.log(value)
        console.log(role)
      },
      toggleSelection() {
        this.$refs.multipleTable.clearSelection();
      },
      onSubmit(role){
        let perms = []
        for (let i = 0; i < this.selectedPermsIds.length; i++) {
          for (let j = 0; j < this.perms.length; j++) {
            if(this.selectedPermsIds[i] === this.perms[j].id){
              perms.push(this.perms[j])
            }
          }
        }

        this.$axios.put('/admin/role',{
          id:role.id,
          name:role.name,
          nameZh:role.nameZh,
          enabled:role.enabled,
          perms:perms
        }).then(res=>{
          if(res && res.status ===200){
            this.$message.success(res.data)
            this.dialogFormVisible = false
            this.listRoles()
          }
        })
        this.$axios.put(`/admin/role/menu?rid=${role.id}`,{
          menusIds:this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys())
        })
      }
    },
    computed:{
      tableHeight(){
        return window.innerHeight-320
      }
    },
    mounted(){
      this.listRoles()
      this.listPerms()
      this.listMenus()
    }
  }
</script>

<style scoped>

</style>