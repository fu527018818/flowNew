<template>
    <div class="app">
          <main-nav :indexMenu="'/statistics/analyze/weekTendency'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                     <search-date :isShowDate="false" :isShowId="true" :tit="'周趋势分析'"  @seachtrigger="seachtrigger"></search-date>
                     <search-Condition @changeCondition="changeCondition">
                         <div slot="searchList">
                              <el-row class="searchList" >
                                    <el-col :span="2">
                                        <div class="searchName">
                                            指标
                                        </div>
                                    </el-col>
                                    <el-col :span="22">
                                       <el-checkbox-group
                                                v-model="checkedRefer"
                                                :min="1"
                                                :max="2">
                                                <el-checkbox  v-for="item in def.refer" :label="item" :key="item">{{item}}</el-checkbox>
                                        </el-checkbox-group>
                                    </el-col>
                             </el-row>
                             <el-row class="searchList" >
                                    <el-col :span="2">
                                        <div class="searchName">
                                            时间
                                        </div>
                                    </el-col>
                                    <el-col :span="22">
                                        <el-radio-group v-model="week">
                                                <el-radio v-for="item in def.week" :key="item" :label="item">{{item}}</el-radio>
                                        </el-radio-group>    
                                    </el-col>
                            </el-row>
                         </div>
                         <div class="conditionTag" slot="conditionTag">
                               <el-tag 
                                type="info"
                                :disable-transitions="false"
                                >
                                指标：<span v-for="item in checkedRefer" :key="item">{{item + ' '}}</span>    
                            </el-tag>
                            <el-tag 
                                type="info"
                                :disable-transitions="false"
                                >
                                <span>时间：{{week}}</span>    
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
import searchCondition from '../../../components/statistic/searchCondition';
import searchDate from '../../../components/statistic/searchDate';
import {statisticsWeekTendency} from '../../../api/global';
import {mapGetters} from 'vuex';
import {statisticsOneOrTwoSpline} from '../../../assets/js/chart-options'
import formatBg from '../../../assets/js/formatterbg';
import Highcharts from 'highcharts'
export default {
  components: {MainNav,searchDate,searchCondition},
  name: "weekTendency", //周趋势分析
  data(){
      return{
         def:{
             refer:['营业额','客流量','客单价','成交率','连带率'],
             week:['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
         },
         checkedRefer:['营业额'],
         week:"星期一"
      }
  },
  computed:{
    ...mapGetters([
        'shop_list_current'
    ])   
  },
  methods:{
       seachtrigger(){
         this.tendencyInit()
      },
      changeCondition(val){
          if(val=='close'){
              this.checkedRefer=['营业额'];
              this.week = '星期一'
              return false;
          }
        this.tendencyInit()
      },
      tendencyInit(){
          statisticsWeekTendency({
              shop_id:this.shop_list_current,
              type:this.checkedRefer,
              week:this.week
          })
          .then(res=>{
               var current = formatBg.formatOneOrTwoSpline(res.data.data.graphic.data1);
               Highcharts.chart('contain',statisticsOneOrTwoSpline(Highcharts,current.name,current.date,current.series))
          })
      }
  },
  created(){
      this.tendencyInit()
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