<template>
    <div class="app">
          <main-nav :indexMenu="'/statistics/analyze/timeFrame'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                      <search-date :isShowDate="false" :isShowId="true" :tit="'销售时段分析'"  @seachtrigger="seachtrigger"></search-date>
                       <search-Condition @changeCondition="changeCondition">
                           <div slot="searchList">
                                <el-row class="searchList" >
                                    <el-col :span="2">
                                        <div class="searchName">
                                            指标查询
                                        </div>
                                    </el-col>
                                    <el-col :span="22">
                                        <el-radio-group v-model="refer">
                                                <el-radio v-for="item in def" :key="item" :label="item">{{item}}</el-radio>
                                        </el-radio-group>    
                                    </el-col>
                                </el-row>
                                <el-row class="searchList" >
                                    <el-col :span="2">
                                        <div class="searchName">
                                            选择时间
                                        </div>
                                    </el-col>
                                    <el-col :span="22">
                                        <el-date-picker
                                            v-model="date"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择日期">
                                        </el-date-picker>   
                                    </el-col>
                                </el-row>
                           </div>
                           <div class="conditionTag" slot="conditionTag">
                                        <el-tag 
                                            type="info"
                                            :disable-transitions="false"
                                            >
                                            <span>指标查询：{{refer}}</span>    
                                        </el-tag><el-tag 
                                            type="info"
                                            :disable-transitions="false"
                                            >
                                            <span>选择时间：{{date}}</span>    
                                        </el-tag>
                          </div>
                       </search-Condition>
                    <div class="chartShow">
                        <div class="contain" id="contain" style="height:100%"></div>
                    </div>
                </div>
                <div class="contentFooter isMd6"></div>
            </div>
        </div>
    </div>
</template>

<script>
import MainNav from '../../../components/MainNav';
import searchDate from '../../../components/statistic/searchDate';
import {mapGetters} from 'vuex';
import Highcharts from 'highcharts';
import searchCondition from '../../../components/statistic/searchCondition';
import {statisticsTimeinterval} from '../../../api/global';
import getDate from '../../../assets/js/dateSelect';
import formatBg from '../../../assets/js/formatterbg';
import {statisticsOneOrTwoSpline} from '../../../assets/js/chart-options'
export default {
  components: {MainNav,searchDate,searchCondition},
  name: "timeFrame", //销售时段分析
  data(){
      return {
          isFold:true,
          refer:"营业额",
          def:['营业额','客流量','客单价','成交率','成交笔数','连带率','销售件数'],
          date:""
      }
  },
  computed:{
      ...mapGetters([
          'shop_list_current'
      ])
  },
  methods:{
      //searchDate调用方法
      seachtrigger(){
         this.frameInit()
      }, //searchCondition 调用主组件方法 第一个参数判断是否是清空
      changeCondition(val){
          if(val=="close"){
               this.refer="营业额";
               this.date=getDate.getToday().start
               return false;
          }
           this.frameInit()
      },
      frameInit(){
          statisticsTimeinterval({
              shop_id:this.shop_list_current,
              type:[this.refer],
              date:this.date
          })
          .then(res=>{
                var current = formatBg.formatOneOrTwoSpline(res.data.data.graphic.data1);
                Highcharts.chart('contain',statisticsOneOrTwoSpline(Highcharts,current.name,current.date,current.series))
          })
      }
  },
  created(){
      this.date = getDate.getToday().start;
      this.frameInit()
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
.chartShow{
        width:100%;
        height: 500px;
        background-color: #ffffff;
        margin-top: 6px;
        padding-bottom: 200px;
    }
    .el-tag--info{
            margin-right: 12px;
            border-radius: 0;
            border: 0;
        }
</style>