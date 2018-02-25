<template>
    <div v-if="lists">
         <el-table
                :data="lists"
                border
                style="width:100%;"
                ref = "userTable"             
                :default-sort = "{prop:'date', order: 'descending'}"
                @sort-change="sortChange"
                @row-click="rowClick"
                :header-row-class-name="tableHeade"
                height="500"
            >
            <template slot="empty">
                <img src="../../assets/img/noresult.png" alt="">
            </template>
            <el-table-column
                prop="userTrait"
                label="客户特征"
                width="250"
                class-name="userTraitStyle"
                >
                <template slot-scope="scope" >
                    <el-tag
                      disabled
                      class="tableTag"
                      :color="scope.row.is_active=='1'?'#7fb9ff':'#cccccc'"
                    >
                     活跃
                    </el-tag>
                    <el-tag
                      disabled
                      class="tableTag"
                      :color="scope.row.is_member=='1'?'#ff957f':'#cccccc'"
                    >
                     会员
                    </el-tag>
                    <el-tag
                      disabled
                      class="tableTag"
                       :color="scope.row.is_member=='1'?'#ffd07f':'#cccccc'"
                    >
                     {{scope.row.level+'星'}}
                    </el-tag>
                    <el-tag
                      disabled
                      class="tableTag"
                       :color="scope.row.is_new_guest=='1'?'#68c763':'#cccccc'"
                    >
                     新成交
                    </el-tag>
                    <el-tag
                      disabled
                      class="tableTag"
                      color="#7fb9ff"
                    >
                     {{scope.row.guest_type=="0"?'访客':(scope.row.guest_type=="1"?'老客':'回头客')}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                prop="real_name"
                label="客户"
                width="80"
                :formatter="formatName"
                >
                <template slot-scope="scope" >
                    <span :class="{noname:scope.row.real_name==''}">{{formatName(scope.row)}}</span>
                </template>
            </el-table-column>
                <el-table-column
                prop="gender"
                label="性别"
                :formatter="formatGender"
                width="50"
                >
                </el-table-column>
                <el-table-column
                prop="last_visit"
                label="上次到店"
                 :sortable="'custom'"
                width="180"
                >
                </el-table-column>
                <el-table-column
                prop="total_consumption"
                label="累计消费"
                :formatter="formatMoney"
                >
                </el-table-column>
                <el-table-column
                prop="consumption_sequence"
                label="消费次数"
            >
            </el-table-column>
                <el-table-column
                prop="visit_count"
                label="到店次数"
                 :sortable="'custom'"
           >
            </el-table-column>
             <el-table-column
                prop="is_menber"
                label="会员"
                width="50"
                :formatter="formatMenber">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        props:['lists'],
        data()  {
            return {
                
        }
    },
    methods:{
         formatter(row, column){
                        return row.address;
                    },
            formatGender(row,column){
                return row.gender=='1'?'男':'女';
            },
            formatMenber(row,column){
                return row.is_member=="1"?'是':'否';
            },
             formatMoney(row,column){
            return '￥'+ row.total_consumption
        },
        formatName(row){
            return row.real_name==""?"陌生客":row.real_name;
        },
        sortChange(column){
            this.$emit('changeSort',column)
        },
        rowClick(row,event,column){
            this.$router.push({name:"userDetailsInfo",params:{id:row.id}})
        },
         tableHeade(){
              return 'headerTr'
           },
       
    },
    created(){
    }
}
</script>

<style scoped lang="scss">
    .tableTag{
        padding: 0 7px;
        height: 20px;
        line-height: 18px;
        border-radius:2px;
        color: #ffffff;
        border: 0;
    }
    .noname{color:#c4c4c4;}
    
</style>