<template>
    <div>
        <search-page :pageDate="pageDate" @changePagesSearch="changePagesSearch">
            <div slot="tit" class="tit">
                     <el-button @click="addNotice" type="success" size="mini">新增</el-button>
                     <el-button @click="editorNotice" type="warning" size="mini">修改</el-button>
                     <el-button  @click="editorNoticeStop" type="danger" size="mini">下架</el-button>
            </div>
        </search-page>
        <div class="manageTable">
        <div class="tableBox" v-if="noticeList.lists"  v-loading="loading"
                                element-loading-text="拼命加载中"
                                element-loading-background="rgba(255,255,255,0.5)">
            <el-table
            :data="noticeList.lists"
            border
            style="width: 100%;text-align:center;"
            ref="noticeTable"
            height="500"
            :header-row-class-name="tableHeade"
            :default-sort = "{prop:'date', order: 'descending'}"
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
                >
              </el-table-column>
               <el-table-column
                  label="置顶"
                  width="80"
                >
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        class="isStick"
                        :type="scope.row.flag=='1'? 'primary':'info'"
                        @click="handleEdit(scope.$index, scope.row)">
                        {{scope.row.flag=='1'?'置顶':'置顶'}}
                    </el-button>
                </template>
              </el-table-column>
              <el-table-column
                prop="publish_time"
                label="发布时间"
                width="160"
                >
              </el-table-column>
              <el-table-column
                prop="stop_time"
                label="下架时间"
                width="160"
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
    import {mapGetters,mapState} from 'vuex';
    import formatBg from '../../../assets/js/formatterbg';
    import {editFlag,editNoticeStop}from '../../../api/global';
    export default {
        name:"newNotice", //新公告
        components:{searchPage},
        data(){
            return{
                pageDate:"",
                loading:false
            }
        },
        computed:{
            ...mapState({
                noticeList:state=>state.set.noticeAllList
            }),
            ...mapGetters([
                'shop_list_current'
            ])
        },
        methods:{
            changePagesSearch(val){
                 this.$emit('changeNoticeRoute',val)
            },
            newNoticeInit(){
                this.pageDate=formatBg.formatPageDate(this.noticeList.limit,this.noticeList.page,this.noticeList.total_count)
            },//修改表头背景色
            tableHeade(){
                 return 'headerTr'
         }, //修改置顶
         handleEdit(index,row){
             editFlag({
                 shop_id:this.shop_list_current,
                 id:row.id,
                 flag:row.flag=="1"?"0":"1"
             }).then(res=>{
                if(res.status==200){
                    this.$emit('changeNoticeRoute')
                }
             })
         },
         addNotice(){
             this.$router.push({name:'editNotice',params:{status:'add'}});
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
         }, //下架
         editorNoticeStop(){
            var selected=this.$refs.noticeTable.selection
            if(selected.length>0){
                var arr = []
                for(var key in selected){
                    arr.push(selected[key].id)
                }
                editNoticeStop({
                    shop_id:this.shop_list_current,
                    id:arr
                }).then(res=>{
                    if(res.status==200){
                        this.$message({
                            type: 'success',
                            message: '下架成功!'
                        });
                       this.$emit('changeNoticeRoute')
                    }
                })

            }else{
                 this.$message.error('请选择一条公告下架');
            }
         },
         formaContent(row,column){
            if(row.content.length>10){
                return row.content.slice(0,10) + '...'
            }else{
                return row.content
            }
             
         }
        },
        created(){
            this.newNoticeInit();
        },
        watch:{
          noticeList:function(val){
              this.newNoticeInit();

          }
        }
    }
</script>

<style scoped lang="scss">
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