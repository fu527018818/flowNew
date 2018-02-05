<template>
    <div class="app">
        <main-nav :indexMenu="'/statistics/expenditures'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                     <search-page :pageDate="pageDate"  @changePagesSearch="changePagesSearch">
                        <div class="tit" slot="tit">
                            支出明细
                        </div>
                       <div class="search" slot="searchCon">
                        <div class="f-input">
                                <input type="text" v-model="search"  @keyup.enter="searchIndent" v-on:blur="searchIndent"  validateevent="true" placeholder="搜客户...">
                        </div>
                        <span class="searchIcon" @click="searchIndent">
                            <i class="iconfont icon-serach"></i>
                        </span>
                      </div>
                     </search-page>
                    <search-condition @changeCondition="changeCondition">
                        <div slot="searchList">
                            <el-row class="searchList" >
                                    <el-col :span="3">
                                        <div class="searchName">
                                            录入时间
                                        </div>                                                                  
                                    </el-col>
                                    <el-col :span="21">
                                        <el-radio-group v-model="date1Current" @change="changeDate">
                                                <el-radio v-for="item in clocker" :key="item" :label="item">{{item}}</el-radio>
                                        </el-radio-group>
                                         <el-date-picker
                                                v-model="date1"
                                                type="daterange"
                                                value-format="yyyy-MM-dd"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                            </el-date-picker>   
                                    </el-col>
                            </el-row>
                             <el-row class="searchList" >
                                    <el-col :span="3">
                                        <div class="searchName">
                                            支出时间
                                        </div>                                                                  
                                    </el-col>
                                    <el-col :span="21">
                                        <el-radio-group v-model="date2Current" @change="changeDate2">
                                                <el-radio v-for="item in clocker" :key="item" :label="item">{{item}}</el-radio>
                                        </el-radio-group>
                                         <el-date-picker
                                                v-model="date2"
                                                type="daterange"
                                                value-format="yyyy-MM-dd"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                            </el-date-picker>   
                                    </el-col>
                            </el-row>
                            <el-row class="searchList" >
                                    <el-col :span="3">
                                        <div class="searchName">
                                            录入方式
                                        </div>                                                                  
                                    </el-col>
                                    <el-col :span="21">
                                        <el-checkbox :indeterminate="def.typeIndeterminate" v-model="def.isTypeAll"  @change="changeAllType">全选</el-checkbox>
                                        <el-checkbox-group v-model="type" @change="changeType">
                                                <el-checkbox v-for="item in def.typeAll"  :label="item" :key="item">{{item}}</el-checkbox>
                                        </el-checkbox-group>
                                     </el-col>
                            </el-row>
                             <el-row class="searchList" v-if="def.userIdAll">
                                    <el-col :span="3">
                                        <div class="searchName">
                                            录入人
                                        </div>                                                                  
                                    </el-col>
                                    <el-col :span="21">
                                        <el-checkbox :indeterminate="def.userIdIndeterminate" v-model="def.isUserIdAll"  @change="changeAllUserId">全选</el-checkbox>
                                        <el-checkbox-group v-model="user_id" @change="changeUserId">
                                                <el-checkbox v-for="item in def.userIdAll"  :label="item.id" :key="item.id">{{item.real_name}}</el-checkbox>
                                        </el-checkbox-group>
                                     </el-col>
                            </el-row>
                        </div>
                         <div class="conditionTag" slot="conditionTag">
                             <el-tag 
                                type="info"
                                :disable-transitions="false"
                                >
                                录入时间：<span >{{date1[0]+ '/'+date2[1]}}</span>    
                            </el-tag>
                             <el-tag 
                                type="info"
                                :disable-transitions="false"
                                >
                                支出时间：<span >{{date2[0]+ '/'+date2[1]}}</span>    
                            </el-tag>
                            <el-tag 
                                type="info"
                                :disable-transitions="false"
                                v-if="type.length>0"
                                closable
                                 @close="handleClose(type,'type')"
                                >
                                录入方式：<span v-for="item in type" :key="item">{{item+'/'}}</span>    
                            </el-tag>
                             <el-tag 
                                type="info"
                                :disable-transitions="false"
                                v-if="user_id_tag.length>0"
                                closable
                                 @close="handleClose(user_id_tag,'user_id_tag')"
                                >
                                录入人：<span  v-for="item in user_id_tag" :key="item">{{item+'/'}}</span>    
                            </el-tag>
                         </div>
                    </search-condition>
                    <expenditures-table :lists="lists"></expenditures-table>
                </div>
                 <div class="contentFooter"></div>
            </div>
        </div> 
    </div>
</template>

<script>
import MainNav from '../../../components/MainNav';
import searchPage from '../../../components/statistic/searchPage';
import searchCondition from '../../../components/statistic/searchCondition';
import formatBg from '../../../assets/js/formatterbg';
import {statisticsPosExpenditure} from '../../../api/global.js';
import expendituresTable from '../../../components/statistic/expendituresTable';
import {mapGetters} from 'vuex';
export default {
  components: {MainNav,searchPage,searchCondition,expendituresTable},
  name: "expenditures", //支出明细
  data(){
      return{
         pageDate:"",
         search:"",
         clocker:['今天','昨天','本周','上周','上月','本月'],
         date1:[],
         date2:[], //录入时间
         date1Current:'今天',
         date2Current:'今天',
         type:[],
         user_id:[],
         user_id_tag:"",
         lists:"",
         def:{
             typeAll:['店租','薪资','采购','税费','水电','电费','其他'],
             typeIndeterminate:true,
             isTypeAll:false,
             userIdIndeterminate:true,
             isUserIdAll:false,
             userIdAll:[] //全部录入人
         }
      }
  },
  computed:{
   ...mapGetters([
       'shop_list_current'
   ]),
    userIdAllId(){
         var arr = [];
         for(var i=0;i< this.def.userIdAll.length;i++){
             arr.push(this.def.userIdAll[i].id);
         }
         return arr
     }
  },
  methods:{
       changePagesSearch(val){
          this.expendituresInit(val);
      },
      searchIndent(){
         this.expendituresInit();
      },
      changeCondition(val){
          if(val=="close"){
            this.changeDate('今天');
            this.changeDate2('今天');
            this.date1Current="今天"
            this.date2Current="今天"
            this.user_id = [];
            this.type= [];
              return false;
          }
          this.expendituresInit();
      },
     changeDate(val){
        this.date1 = [];
        var date = formatBg.getClockerDate(val);
        for(var key in date){
                this.date1.push(date[key])
            }
      },
    changeDate2(val){
         this.date2 = [];
         var date = formatBg.getClockerDate(val);
        for(var key in date){
                this.date2.push(date[key])
            }
      },
    changeAllType(val){
       this.type = val ? this.def.typeAll:[];
       this.def.typeIndeterminate = false;
   },
   changeType(val){
      let checkCount = val.length;
      this.def.isTypeAll = checkCount === this.def.typeAll.length;
      this.def.typeIndeterminate = checkCount>0 && checkCount < this.def.typeAll.length;
   }
   , //录入人
   changeUserId(val){
      let checkCount = val.length;
      this.def.isUserIdAll = checkCount === this.def.userIdAll.length;
      this.def.userIdIndeterminate = checkCount>0 && checkCount < this.def.userIdAll.length;
   },
   changeAllUserId(val){
       this.user_id = val ? this.userIdAllId:[];
       this.def.userIdIndeterminate = false;
   },
   expendituresInit(val){
         statisticsPosExpenditure({
          shop_id:this.shop_list_current,
          type:this.type,
          add_start_date:this.date1[0],
          add_end_date:this.date1[1],
          input_start_date:this.date2[0],
          input_en_date:this.date2[1],
          user_id:this.user_id,
          search:this.search,
          limit:val==undefined?'10':val.limit,
          page:val==undefined?'1':val.current,
         })
         .then(res=>{
               var data = res.data.data;
               this.def.userIdAll = data.user_lists;
               this.pageDate = formatBg.formatPageDate(data.limit,data.page,data.search_count);
               this.lists = data.lists
         })
   },
   handleClose(tag,ele){
       switch(ele){
           case 'type':
                this.type= [];
           break;
           case 'user_id_tag':
                this.user_id = [];
           break;
       }
   }
  },
  created(){
      this.changeDate('今天');
      this.changeDate2('今天');
      this.expendituresInit();
  },
  watch:{
     user_id:function(val){
        var self = this;
        var arr =[];
        this.def.userIdAll.forEach(function(item){
               if(self.user_id.length>0){
                   self.user_id.forEach(function(oneItem){
                        if(item.id==oneItem){
                            arr.push(item.real_name) 
                        }
                   })
               }
        })
        this.user_id_tag = arr;
     } 
  }
};
</script>

<style scoped lang="scss">
      @import '../../../assets/css/searchlist.scss';
      .tit{
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            color: #4d4d4d;
            padding-left: 30px;
        }
</style>