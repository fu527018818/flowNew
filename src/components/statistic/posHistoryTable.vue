<template>
     <div class="manageTable" v-if="lists">
         <div class="tableBox" v-loading="loading"
                                element-loading-text="拼命加载中"
                                element-loading-background="rgba(255,255,255,0.5)">
                <el-table
            :data="lists"
            border
            style="width: 100%"
            ref = "userTable"
            height="500"
            :header-row-class-name="tableHeade"
            :default-sort = "{prop:'date', order: 'descending'}"
            >
            <template slot="empty">
                <img src="../../assets/img/noresult.png" alt="">
            </template>
            <el-table-column
                prop="id"
                label="订单流水号"
                width="120"
                 >
             </el-table-column>
                 <el-table-column
                prop="add_time"
                label="录入时间"
                width="160"
                 sortable
                >
              </el-table-column>
              <el-table-column
                prop="price"
                label="金额"
                >
              </el-table-column>
              <el-table-column
                prop="fixture_count"
                label="成交笔数"
                sortable
                width="120"
                >
              </el-table-column>
             
                <el-table-column
                prop="sales_count"
                label="销售件数"
                >
              </el-table-column>
              <el-table-column
                prop="cost_price"
                label="产品成本"
                >
              </el-table-column>
              <el-table-column
                prop="input_time"
                label="成交时间"
                width="160"
                >
              </el-table-column>
              <el-table-column
                prop="type"
                label="录入方式"
                >
              </el-table-column>
              <el-table-column
                prop="real_name"
                label="录入人"
                >
              </el-table-column>
            </el-table>
         </div>
     </div>
</template>

<script>
    export default {
        name:"postable", //pos数据明细
        props:['lists'],
        data(){
            return {
              loading:false
            }
        },
        methods:{
             tableHeade(){
          return 'headerTr'
         }
        },
        created(){

        }
    }
</script>

<style scoped lang="scss">
      .manageTable{
        width: 100%;
        height: auto;
        background-color: #ffffff;
        margin-top: 6px;
        & > .tableBox{
            padding: 30px;
        }
    }
</style>