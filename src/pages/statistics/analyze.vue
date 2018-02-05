<template>
    <div class="app">
          <main-nav :indexMenu="'/statistics/analyze'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                     <search-date :isShowDate="false" :isShowId="true"  :tit="'店铺评估'"  @seachtrigger="seachtrigger"></search-date>
                     <div class="analyzeBox">
                         <div class="dataListBox">
                            <el-row :gutter="10" class="dataList">
                                <el-col :span="6" v-for="item in def" :key="item.name">
                                     <div class="grid-content bg-purple" @click="enter(item.url)">
                                         <div>
                                              <img :src="item.img" alt="">
                                         </div>
                                         <div>{{item.name}}</div>
                                    </div>
                                </el-col>
                            </el-row>
                         </div>
                     </div>
                </div>
                 <div class="contentFooter isMd6"></div>
            </div>
        </div> 
    </div>
</template>

<script>
import MainNav from '../../components/MainNav';
import searchDate from '../../components/statistic/searchDate';
export default {
  components: {MainNav,searchDate},
  name: "indent", //订单流水
  data(){
      return {
          def:[{
              name:"pos录入历史",
              img:require("../../assets/img/assess/assess1.png"),
              url:"posHistory"
          },{
              name:"支出明细",
              img:require("../../assets/img/assess/assess2.png"),
              url:"expenditures"
          },{
              name:"投资测算",
              img:require("../../assets/img/assess/assess3.png"),
              url:"forecast"
          },{
              name:"坪效",
              img:require("../../assets/img/assess/assess4.png"),
               url:"effectiveness"
          },{
              name:"增长率分析",
              img:require("../../assets/img/assess/assess5.png"),
              url:"increase"
          },{
              name:"周趋势分析",
              img:require("../../assets/img/assess/assess6.png"),
               url:"weekTendency"
          },{
              name:"周权重分析",
              img:require("../../assets/img/assess/assess7.png"),
               url:"weekWeight"
          },{
              name:"销售时段分析",
              img:require("../../assets/img/assess/assess8.png"),
               url:"timeFrame"
          },{
              name:"客流滞留分析",
              img:require("../../assets/img/assess/assess9.png"),
              url:"flowRetention"
          },{
              name:"客流高低峰",
              img:require("../../assets/img/assess/assess10.png"),
               url:"analyzeHighLow"
          },{
              name:"顾客员工比分析",
              img:require("../../assets/img/assess/assess11.png"),
               url:"clientStaff"
          },{
              name:"热点",
              img:require("../../assets/img/assess/assess12.png"),
               url:""
          },]
      }
  },
  methods:{
      seachtrigger(){

      },
     enter(url){
         this.$router.push({name:url})
     } 
  }
};
</script>

<style scoped lang="scss">
    .analyzeBox{
        width: 100%;
        height: 800px;
        background-color: #ffffff;
        margin-top: 6px;
    }
    .dataListBox .dataList{
        padding:23px 32px;
         & .grid-content.bg-purple{
            border: solid 1px #d3dde0;
            height: 128px;
            position: relative;
            margin-bottom: 20px;
            &:hover{
                  box-shadow: 0px 1px 6px 0px #d3dde0;
            }
            cursor: pointer;
            & > div:nth-child(1){
                text-align: center;
                margin-top: 30px;
            }
            & > div:nth-child(2){
                text-align: center;
                font-size: 14px;
                line-height: 26px;
                letter-spacing: 0px;
                color: #4c4c4c;
                margin-top: 5px;
            }
         }
    }
</style>