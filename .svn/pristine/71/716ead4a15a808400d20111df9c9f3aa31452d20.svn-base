<template>
    <div class="app">
         <main-nav :indexMenu="'/newNotice'"></main-nav>
          <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <div class="titCutBox">
                        <el-row class="titCut">
                            <el-col :span="3">
                                <div class="tit">公告管理</div>
                            </el-col>
                            <el-col :span="21" class="titCutRight">
                                <router-link :to="{name:'newNotice'}">新公告</router-link>
                                <router-link :to="{name:'historyNotice'}">历史记录</router-link>
                            </el-col>
                        </el-row>
                    </div>
                    <div>
                    <router-view @changeNoticeRoute="changeNoticeRoute"></router-view>
                    </div>
                </div>
                 <div class="contentFooter"></div>
            </div>
          </div>
    </div>
</template>
<script>
    import mainNav from '../../components/MainNav';
    import  searchPage from '../../components/statistic/searchPage';  //文件位置后期维护更改
    import {mapGetters} from 'vuex';
    import {noticeList} from '../../api/global';
    export default {
        name:"setNotice", //公告管理
        components:{mainNav,searchPage},
        data(){
            return{
            pageDate:"",
            page:1,
            limit:10
            }
        },
        computed:{
            ...mapGetters([
                'shop_list_current'
            ])
        },
        methods:{
           setNoticeInit(){
              this.$store.dispatch('getNoticeList',{
                  shop_id:this.shop_list_current,
                  is_publish:0,
                  page:this.page,
                  limit:this.limit
              })
           },
           changeNoticeRoute(val){
               if(val){
                   this.page=val.current;
                   this.limit=val.limit
               }
               this.setNoticeInit();
           }
           
        },
        created(){
            this.setNoticeInit()
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

</style>