<template>
    <div class="app">
         <main-nav :indexMenu="'/interFace'"></main-nav>
          <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <div class="titCutBox">
                        <el-row class="titCut">
                            <el-col :span="3">
                                <div class="tit">接口管理</div>
                            </el-col>
                        </el-row>
                    </div>
                    <div>
                        <search-page :pageDate="pageDate" @changePagesSearch="changePagesSearch">
                            <div slot="tit" class="tit">
                                    <el-button @click="addInterFace" type="success" size="mini">新增</el-button>
                                    <el-button @click="editorInterFace" type="warning" size="mini">编辑</el-button>
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
                                        <img src="../../assets/img/noresult.png" alt="">
                                    </template>
                                    <el-table-column
                                    type="selection"
                                    width="55">
                                    </el-table-column>
                                    <el-table-column
                                    prop="title"
                                    label="店铺名称"
                                    >
                                </el-table-column>
                                <el-table-column
                                    label="添加时间"
                                    width="80"
                                    prop="start_time"
                                    >
                                </el-table-column>
                                <el-table-column
                                    prop="publish_time"
                                    label="状态"
                                    width="160"
                                    >
                                </el-table-column>
                                <el-table-column
                                    label="设置"
                                    width="120"
                                    >
                                    <template slot-scope="scope">
                                        <el-button
                                            class="viewDetails"
                                            size="mini"
                                            type="primary"
                                            @click="viewDetails(scope.$index, scope.row)">
                                            {{'解绑'}}
                                        </el-button>
                                    </template>
                                </el-table-column>
                                </el-table>
                            </div> 
                        </div>
                    </div>
                </div>
                 <div class="contentFooter isMd6"></div>
            </div>
          </div>
    </div>
</template>
<script>
import mainNav from '../../components/MainNav';
import searchPage from '../../components/statistic/searchPage';
import {mapGetters,mapState} from 'vuex';
import formatBg from '../../assets/js/formatterbg';
import {editFlag,editNoticeStop}from '../../api/global';
export default {
    name:'interFace',
    components:{mainNav,searchPage},
    data(){
        return{
            pageDate:"",
            loading:false,
            noticeList:{
                lists:[],
                limit:10,
                page:1,
                total_count:20
            }
        }
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
        },
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
         addInterFace(){
             this.$router.push({path:'/editInterFace'});
         },
         viewDetails(index,row){
             this.$router.push({name:'editNotice',params:{curren:row,status:'edit'}});
         },
         editorInterFace(){
            this.$router.push({path:'/editInterFace/'+1});
         }, 
         formaContent(row,column){
            if(row.content.length>10){
                return row.content.slice(0,10) + '...'
            }else{
                return row.content
            }
             
         }
    }
}
</script>
<style scoped lang="scss">
.titCutBox{ 
   background-color:#ffffff;
   height: 68px;
   line-height: 68px;
   padding: 0 28px;
   & .titCut{
    border-bottom: solid 1px #cccccc;
     & .tit{
	   font-size: 18px;
	   font-weight: normal;
    	font-stretch: normal;
     color: #4d4d4d;
     padding-left: 2px;
   }
   &  .titCutRight a{
      display: inline-block;
       padding: 0 15px;
	     font-size: 14px;
	     font-weight: normal;
	     font-stretch: normal;
       color: #4c4c4c;
      &.router-link-active{
         color: #4198ff;
         position: relative;
         &:after{
            content:"";
            width:100%;
            height: 2px;
            position: absolute;
            background-color: #4198ff;
            bottom: 0;
            left: 0;
         }
       }
   }
  }
   
}
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

