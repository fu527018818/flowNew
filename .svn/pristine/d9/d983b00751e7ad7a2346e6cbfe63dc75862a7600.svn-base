<template>
    <div class="app">
          <main-nav :indexMenu="'/statistics/analyze/weekWeight'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                     <search-date :isShowDate="false" :isShowId="true" :tit="'周权重分析'"  @seachtrigger="seachtrigger"></search-date>
                     <search-Condition @changeCondition="changeCondition"> 
                         <div slot="searchList">
                            <el-row class="searchList">
                                <el-col :span="2">
                                    <div class="searchName">
                                        时间
                                    </div>
                                </el-col>
                                <el-col :span="22">
                                    <el-radio-group v-model="week">
                                            <el-radio v-for="item in def" :key="item" :label="item">{{item}}</el-radio>
                                    </el-radio-group>    
                                </el-col>
                            </el-row>
                         </div>
                         <div class="conditionTag" slot="conditionTag">
                                 <el-tag 
                                        type="info"
                                        :disable-transitions="false"
                                        >
                                        <span>指标查询：{{week}}</span>    
                                </el-tag>
                          </div>
                     </search-Condition>
                     <div class="chartShow">
                        <div class="contain" id="contain" style="height:100%"></div>
                    </div>
                </div>
                 <div class="contentFooter"></div>
            </div>
        </div> 
    </div>
</template>

<script>
import MainNav from '../../../components/MainNav';
import searchDate from '../../../components/statistic/searchDate';
import searchCondition from '../../../components/statistic/searchCondition';
import {statisticsWeekweight} from '../../../api/global';
import {mapGetters} from 'vuex';
import formatBg from '../../../assets/js/formatterbg';
import Highcharts from 'highcharts';
import {statisticsOneOrTwoSpline} from '../../../assets/js/chart-options'
export default {
  components: {MainNav,searchCondition,searchDate},
  name: "weekWeight", //周权重分析
  data(){
      return{
          def:['本周','上周','最近13周'],
          week:'本周'
      }
  },
  computed:{
     ...mapGetters([
         'shop_list_current'
     ])
  },
  methods:{
      seachtrigger(){
         this.weekWeightInit()
      },
      changeCondition(val){
        if(val=="close"){
            this.week='本周'
            return false;
        }
        this.weekWeightInit()
      },
      weekWeightInit(){
         statisticsWeekweight({
             shop_id:this.shop_list_current,
             week:this.week
         })
         .then(res=>{
              var current = formatBg.formatOneOrTwoSpline(res.data.data.graphic.data1);
              Highcharts.chart('contain',statisticsOneOrTwoSpline(Highcharts,current.name,current.date,current.series))
         })
      }
  },
 created(){
     this.weekWeightInit()
  }
};
</script>

<style scoped lang="scss">
     .searchList{
            height: 45px;
            line-height: 45px;
            border-bottom: 1px dashed #cccccc;
            overflow: hidden;
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
        line-height: 77px;
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
        line-height: 50px;
        width: 100%;
        height: 100%;
        min-height: 77px;
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
.chartShow{
        width:100%;
        height: 500px;
        background-color: #ffffff;
        margin-top: 6px;
        padding-bottom: 200px;
    }   
</style>