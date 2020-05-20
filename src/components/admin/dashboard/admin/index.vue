<template>
  <div class="dashboard-editor-container">
    <PanelGroup @handleSetLineChartData="handleSetLineChartData"></PanelGroup>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <LineChart :chart-data="lineChartData" />
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <RaddarChart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <PieChart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <BarChart />
        </div>
      </el-col>
    </el-row>


    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <TransactionTable />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <TodoList />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <BoxCard />
      </el-col>
    </el-row>

  </div>
</template>

<script>

  import PanelGroup from "@/components/admin/dashboard/admin/components/PanelGroup";
  import LineChart from "@/components/admin/dashboard/admin/components/LineChart";
  import RaddarChart from "@/components/admin/dashboard/admin/components/RaddarChart";
  import PieChart from "@/components/admin/dashboard/admin/components/PieChart";
  import BarChart from "@/components/admin/dashboard/admin/components/BarChart";
  import TransactionTable from "@/components/admin/dashboard/admin/components/TransactionTable";
  import TodoList from "@/components/admin/dashboard/admin/components/TodoList";
  import BoxCard from "@/components/admin/dashboard/admin/components/BoxCard";


  const lineChartData = {
    newVisitis: {
      expectedData: [100, 120, 161, 134, 105, 160, 165],
      actualData: [120, 82, 91, 154, 162, 140, 145]
    },
    messages: {
      expectedData: [200, 192, 120, 144, 160, 130, 140],
      actualData: [180, 160, 151, 106, 145, 150, 130]
    },
    purchases: {
      expectedData: [80, 100, 121, 104, 105, 90, 100],
      actualData: [120, 90, 100, 138, 142, 130, 130]
    },
    shoppings: {
      expectedData: [130, 140, 141, 142, 145, 150, 160],
      actualData: [120, 82, 91, 154, 162, 140, 130]
    }
  }

  export default {
    name: 'DashboardAdmin',
    data(){
      return{
        lineChartData: lineChartData.newVisitis
      }
    },
    methods:{
      handleSetLineChartData (type) {
        this.lineChartData = this.lineChartData[type]
      }
    },
    components:{
      PanelGroup,
      LineChart,
      RaddarChart,
      PieChart,
      BarChart,
      TransactionTable,
      TodoList,
      BoxCard
    },
  }
</script>

<style lang="scss" scoped>
  .dashboard-editor-container {
    padding: 32px;
    background-color: #f6f6f6;
    position: relative;
    margin: -20px -20px 0 -20px;
    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }
  @media (max-width:1024px) {
    .chart-wrapper {
      padding: 8px;
    }
  }
</style>