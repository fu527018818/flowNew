<template>
    <div class="app">
          <main-nav :indexMenu="'/statistics/orderDetail'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                   <search-page :pageDate="pageDate"  @changePagesSearch="changePagesSearch">
                       <div slot="tit" class="tit">
                             订单详情
                       </div>
                       <div class="search" slot="searchCon">
                        <div class="f-input">
                                <input type="text" v-model="searchOrder"  @keyup.enter="searchIndent" v-on:blur="searchIndent"  validateevent="true" placeholder="搜订单...">
                        </div>
                        <span class="searchIcon" @click="searchIndent">
                            <i class="iconfont icon-serach"></i>
                        </span>
                    </div>
                   </search-page>
                   <search-condition @changeCondition="changeCondition">
                        <div slot="searchList">
                            <el-row class="searchList" >
                                    <el-col :span="2">
                                        <div class="searchName">
                                            时间
                                        </div>                                                                  
                                    </el-col>
                                    <el-col :span="22">
                                        <el-radio-group v-model="clockerCurrent" @change="changeDate">
                                                <el-radio v-for="item in clocker" :key="item" :label="item">{{item}}</el-radio>
                                        </el-radio-group>
                                         <el-date-picker
                                                v-model="date"
                                                type="daterange"
                                                value-format="yyyy-MM-dd"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                            </el-date-picker>   
                                    </el-col>
                            </el-row>
                             <el-row class="searchList">
                                    <el-col :span="2">
                                        <div class="searchName">
                                            门店
                                        </div>
                                    </el-col>
                                    <el-col :span="22">
                                        <el-checkbox :indeterminate="shopIndeterminate" v-model="isShopAll"  @change="changeAllShop">全选</el-checkbox>
                                        <el-checkbox-group v-model="shop" @change="changeShop">
                                                <el-checkbox v-for="item in defShop"  :label="item.id" :key="item.id">{{item.shop_name}}</el-checkbox>
                                        </el-checkbox-group>
                                    </el-col>
                            </el-row>
                             <el-row class="searchList">
                                    <el-col :span="2">
                                        <div class="searchName">
                                            收银台
                                        </div>
                                    </el-col>
                                     <el-col :span="22">
                                        <el-checkbox :indeterminate="moneyIndeterminate" v-model="isMoneyAll"  @change="changeAllMoney">全选</el-checkbox>
                                        <el-checkbox-group v-model="cashier_desk" @change="changeMoney">
                                                <el-checkbox v-for="item in cashier_deskAll"  :label="item" :key="item">{{item}}</el-checkbox>
                                        </el-checkbox-group> 
                                    </el-col>
                            </el-row>
                            <el-row class="searchList">
                                    <el-col :span="2">
                                        <div class="searchName">
                                            收银员
                                        </div>
                                    </el-col>
                                     <el-col :span="22">
                                        <el-checkbox :indeterminate="cashierIndeterminate" v-model="isCashierAll"  @change="changeAllCashier">全选</el-checkbox>
                                        <el-checkbox-group v-model="cashier" @change="changeCashier">
                                                <el-checkbox v-for="item in cashierAll"  :label="item" :key="item">{{item}}</el-checkbox>
                                        </el-checkbox-group> 
                                    </el-col>
                            </el-row>
                        </div>
                        <div class="conditionTag" slot="conditionTag">
                            <el-tag 
                                type="info"
                                :disable-transitions="false"
                                >
                                时间：<span >{{date[0]+ '/'+date[1]}}</span>    
                            </el-tag>
                            <el-tag 
                                type="info"
                                :disable-transitions="false"
                                v-if="shopTag.length>0"
                                >
                                门店：<span v-for="item in shopTag" :key="item">{{item}}</span>    
                            </el-tag>
                            <el-tag 
                                type="info"
                                :disable-transitions="false"
                                v-if="cashier_desk.length>0"
                                >
                                收银台：<span v-for="item in cashier_desk" :key="item">{{item}}</span>    
                            </el-tag>
                            <el-tag 
                                type="info"
                                :disable-transitions="false"
                                v-if="cashier.length>0"
                                >
                                收银员：<span v-for="item in cashier" :key="item">{{item}}</span>    
                            </el-tag>
                        </div>
                   </search-condition>
                   <detail-table  :lists="lists"></detail-table>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import MainNav from '../../components/MainNav';
import searchPage from '../../components/statistic/searchPage';
import detailTable from '../../components/statistic/detailTable'
import {statisticsIndent} from '../../api/global.js';
import {mapGetters} from 'vuex';
import searchCondition from '../../components/statistic/searchCondition';
import formatBg from '../../assets/js/formatterbg';
import getTotay  from '../../assets/js/dateSelect';
export default {
 components: {MainNav,searchPage,searchCondition,detailTable},
 name:"orderDetail",//详情
  data(){
      return{
            clocker:['今天','昨天','本周','上周','上月','本月'],
            shopIndeterminate:true,
            moneyIndeterminate:true,
            cashierIndeterminate:true,
            isMoneyAll:false,
            isShopAll:false,
            isCashierAll:false,
            isPages:false,
            cashier_deskAll:'',  //全部收银台列表
            cashierAll:'',//全部收银员
            value:10,
            date:[],
            clockerCurrent:'今天',
            shop:[],  //已选门店
            cashier_desk:[], //已选收银台
            cashier:[],
            shopTag:'',
            pageDate:"", //后台分页数据
            lists:'', //数据列表
            searchOrder:'',  //搜索订单值模糊搜索
            // type:''   //客户类型（新客户，老客户，所有客户）
      }
  },
  computed:{
      ...mapGetters([
          'shop_list_current',
          'shop_list'
      ]), //门店列表获取
      defShop(){
          return this.shop_list
      },
      shopId(){
          var arr = []
           for(var i =0;i<this.shop_list.length;i++){
               arr.push(this.shop_list[i].id);
           }
          return arr
      },
      type(){
          return  this.$route.params.name||''
      }
  },
  methods:{
      changPages(){
          this.isPages = !this.isPages;
    },
    indentInit(val){
       statisticsIndent({
              shop_id:this.shop,
              start_date:this.date[0],
              end_date:this.date[1],
              search:this.searchOrder,
              cashier_desk:this.cashier_desk,
              limit:val==undefined?'10':val.limit,
              page:val==undefined?'1':val.current,
              type:this.type,
              cashier:this.cashier

          })
          .then(res=>{
              if(res.data.status =="200"){
                    var data = res.data.data; 
                    //收银台
                    this.cashier_deskAll =data.cashier_desk;
                    //收银员
                    this.cashierAll = data.cashier;
                    //格式化分页所需数值
                    this.pageDate = formatBg.formatPageDate(data.limit,data.page,data.search_count);
                    this.lists = data.lists
              }
              
          })
      }, //searchPage分页组件传过来的值
      changePagesSearch(val){
          this.indentInit(val)
      }, //搜索条件
      changeCondition(val){
          //清空选择
         if(val =='close'){
               this.clockerCurrent = '今天'
               this.shop = [];
               this.cashier_desk = [];
               this.shopTag = '';
               this.searchOrder = '';
               this.cashier =[];
               this.changeDate('今天');
             return false
         }
        this.indentInit()
           
      }, //门店
      changeShop(val){
          let checkCount = val.length;
          this.isShopAll = checkCount ===this.shop_list.length;
          this.shopIndeterminate = checkCount > 0 && checkCount < this.shop_list.length;
      },//选全部门店
      changeAllShop(val){
          this.shop = val?this.shopId:[];
          this.shopIndeterminate = false;
      },//全选收银台
      changeAllMoney(val){
           this.cashier_desk = val?this.cashier_deskAll:[];
           this.moneyIndeterminate = false;
      }, //收银台
      changeMoney(val){
          let checkCount = val.length;
          this.isMoneyAll = checkCount ===this.cashier_deskAll.length;
          this.moneyIndeterminate = checkCount > 0 && checkCount < this.cashier_deskAll.length;
      }, //收银员
      changeAllCashier(val){
          this.cashier = val?this.cashierAll:[];
           this.cashierIndeterminate = false;
      },//收银员
      changeCashier(val){
         let checkCount = val.length;
         this.isCashierAll = checkCount ===this.cashierAll.length;
         this.cashierIndeterminate=checkCount>0&&checkCount<this.cashierAll.length;
      },
      //时间添加
      changeDate(val){
        this.date = [];
        var date = formatBg.getClockerDate(val);
        for(var key in date){
                this.date.push(date[key])
            }
      },
      searchIndent(){
           this.indentInit()
      }, //处理从营业额页面点进来时的参数
      orderSource(){
          if(this.$route.params.name){
                this.clockerCurrent = '';
                this.orderSource = this.$route.params
                for(var key in this.orderSource.date){
                    this.date.push(this.orderSource.date[key])
                }
           }else{
               this.changeDate('今天')
           }
      }

  },
watch:{ //监听店铺ID变化，转化成店铺名字
      shop:function(val){
          var self = this;
          var arr =[];
           this.shop_list.forEach(function (item){
               if(self.shop.length>0){
                  self.shop.forEach(function(oneItem){
                        if(item.id==oneItem){
                            arr.push(item.shop_name) 
                        }
                  })
               }
           })
         this.shopTag = arr
      }
  },
  created(){
       this.orderSource();
       this.indentInit();
       console.log(this.type)
  }

};
</script>

<style scoped lang="scss">
 .tit{
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            color: #4d4d4d;
            padding-left: 30px;
        }
  .search{
            width: 250px;
            height: 30px;
            position: relative;
            display: inline-block;
            & input{
                  vertical-align:middle;
                  display: table-cell;
                  border:0;
                  height:30px;
                  padding: 0;
                  width: 196px;
                  box-sizing: border-box;
                  background-color: #ffffff;
                  border: 1px solid #dcdfe6;
                  -webkit-appearance:none;
                  text-indent: 10px;
            }
           & .searchIcon{
               cursor: pointer;
               width:54px;
               height: 30px;
               display:inline-block;
               background-color: #4198ff;
               position: absolute;
               right: 0;
               top:0;
               & .icon-serach{
                 color: #ffffff;
                 position: absolute;
                 top: 50%;
                 left: 50%;
                 font-size: 20px;
                 transform: translate(-50%,-50%);
                 line-height: 0;
               }
           }
        }
     .searchList{
            height: 45px;
            line-height: 45px;
            border-bottom: 1px dashed #cccccc;
            overflow: hidden;
        & .el-checkbox-group{
            display: inline-block;
        }
        & .checkboxAll{
            margin-right: 24px;
        }
        & .searchName{
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #808080;
                padding-left: 10px;
        }
            &.searchList:last-child{
                    border-bottom:none;
            }
        }
     .manageSearch{
        background-color: #ffffff;
        line-height:42px;
        padding:20px 0;
         &  .conditionTit{
        padding-left: 30px;
        font-family: MicrosoftYaHeiLight;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #4c4c4c;

        }
        &  .conditionTag{
        width: 100%;
        height: 100%;
        }
        & .searchBtn{
        font-family: MicrosoftYaHeiLight;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        cursor: pointer;
        user-select: none;
        & > div:nth-child(1){
            color: #808080;
            font-size: 14px;
            display: inline-block;
            margin: 0 10px;
        }
        }
    }
.el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner{
       width: 240px;
        margin-left: 40px;
        position:relative;
        top:-2px;
} 
.el-checkbox-group{
        display: inline-block!important;
        margin-left: 24px!important;
    }
</style>