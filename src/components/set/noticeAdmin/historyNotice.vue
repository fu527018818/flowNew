<template>
<div>
    <search-page :pageDate="pageDate" @changePagesSearch="changePagesSearch">
        <div slot="tit" class="tit">
                    <el-button @click="editorNotice()" type="success" size="mini">修改</el-button>
                    <el-button  @click="deleteNotice()" type="danger" size="mini">删除</el-button>
        </div>
    </search-page>
    <div class="manageTable">
        <div class="tableBox" v-if="historyList&&historyList.lists"  v-loading="loading"
                                element-loading-text="拼命加载中"
                                element-loading-background="rgba(255,255,255,0.5)">
            <el-table
            :data="historyList.lists"
            border
            style="width: 100%;text-align:center;"
            ref="noticeTable"
            height="500"
            :header-row-class-name="tableHeade"
            :default-sort = "{prop:'date', order: 'descending'}"
            @selection-change="handleSelectionChange"
            >
                <template slot="empty">
                    <img src="../../../assets/img/noresult.png" alt="">
                </template>
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                prop="title"
                label="标题"
                width="150"
                >
              </el-table-column>
               
              <el-table-column
                prop="publish_time"
                label="发布时间"
                width="180"
                >
              </el-table-column>
              <el-table-column
                prop="stop_time"
                label="下架时间"
                width="180"
                 sortable
                >
              </el-table-column>
              <el-table-column
                prop="content"
                label="公告内容"
                :formatter="formaContent"
                >
              </el-table-column>
              <el-table-column
                  label="详细信息"
                  width="120"
                >
                <template slot-scope="scope">
                    <el-button
                        class="viewDetails"
                        size="mini"
                        type="primary"
                        @click="viewDetails(scope.$index, scope.row)">
                        {{'详细信息'}}
                    </el-button>
                </template>
              </el-table-column>
            </el-table>
        </div> 
    </div>
</div>
</template>

<script>
import searchPage from '../../../components/statistic/searchPage';
import {noticeHistory,delNotice}from '../../../api/global';
import formatBg from '../../../assets/js/formatterbg';
import {mapGetters,mapState} from 'vuex';
    export default {
        name:"historyNotice", //新公告
        components:{searchPage},
        data(){
            return{
                pageDate:"",
                historyList:null,
                loading:false,
                points:{
                    shop_id:this.shop_list_current,
                    is_publish:-1,
                    page:1,
                    limit:10
                },
                selectionList:[]
            }
        },
        created(){
            this.points.shop_id =this.shop_list_current;
            this.initHistory();
        },
        methods:{
            initHistory(){
                this.loading = true;
                noticeHistory(this.points).then(data=>{
                    this.loading = false;
                    this.historyList = data.data.data;
                    this.pageDate=formatBg.formatPageDate(this.historyList.limit,this.historyList.page,this.historyList.total_count)
                }).catch(err=>{
                    this.loading = false;
                })
            },
            tableHeade(){
                 return 'headerTr'
            },
            formaContent(row,column){
                if(row.content.length>10){
                    return row.content.slice(0,10) + '...'
                }else{
                    return row.content
                }
                
            },
            changePagesSearch(val){
                 this.$emit('changeNoticeRoute',val)
            },
            viewDetails(index,row){
             this.$router.push({name:'editNotice',params:{curren:row,status:'edit'}});
            },
            editorNotice(){
                var selected= this.$refs.noticeTable.selection
                if(selected.length==1){
                    this.$router.push({name:'editNotice',params:{curren:selected[0],status:'edit'}});
                    return false
                }else{
                    this.$message.error('请选择一条公告进行修改!');
                    this.$refs.noticeTable.clearSelection();
                }
            },
            deleteNotice(){
                if (this.selectionList.length == 0) {
                    this.$message.error('请选中要删除的公告!');
                    return
                }
                this.$confirm('确认删除?', '', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    delNotice({id:this.selectionList}).then(data=>{
                        for (let i = this.historyList.lists.length-1; i >=0; i--) {
                            const element = this.historyList.lists[i];
                            for (let j = this.selectionList.length-1; j >=0; j--) {
                                const temp = this.selectionList[j];
                                if (element.id == temp) {
                                    this.historyList.lists[i] = null;
                                    this.historyList.lists.splice(i,1);
                                }
                            }
                        }
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }).catch(err=>{
                    });
                    
                }).catch(() => {
         
                });
                
            },
            handleSelectionChange(val){
                this.selectionList = [];
                for (let i = 0; i < val.length; i++) {
                    const element = val[i];
                    this.selectionList.push(element.id);
                }
            }
        },
        computed:{
            ...mapGetters([
                'shop_list_current'
            ])
        },
    }
</script>

<style lang="scss" scoped>
.tit{
    padding-left: 30px;
}
.manageTable{
    width: 100%;
    height: auto;
    background-color: #ffffff;
    & > .tableBox{
        padding:24px 30px 30px 30px;
    }
}
.isStick{
    padding: 2px 10px;
    font-size: 14px;
    border-radius: 0;
    &.el-button--info{
        background-color:#cccccc;
        border-color: #cccccc;
    }
}
.viewDetails{
    font-size: 14px;
    border-radius: 0;
    padding:2px 11px;
}
</style>