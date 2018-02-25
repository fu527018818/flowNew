<template>
    <div class="app">
          <main-nav :indexMenu="'/statistics/analyze/forecast'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                    <div class="content">
                        <search-date :isShowDate="false"  :isShowId="true"  :tit="'投资测算'" @seachtrigger="seachtrigger">
                            <el-date-picker
                            @change="changeDate"
                            v-model="date"
                            slot="selectDate"
                            type="month"
                            value-format="yyyy-MM"
                            placeholder="选择月">
                            </el-date-picker>
                        </search-date>
                        <div class="dataListBox">
                            <el-row :gutter="10" class="dataList" v-if="investment">
                                <el-col :span="6">
                                    <div class="grid-content bg-purple"> 
                                        <div>投资总额</div>
                                        <div>
                                            <div :class="[investment.forecast_total_price>7?'fontNum_28':'']">{{investment.forecast_total_price}}</div>
                                            <div>元</div>
                                        </div>
                                    </div>  
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content bg-purple"> 
                                        <div>预计年利润</div>
                                         <div>
                                            <div :class="[investment.forecast_total_price>7?'fontNum_28':'']">{{investment.forecast_total_price}}</div>
                                            <div>元</div>
                                        </div>
                                    </div>  
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content bg-purple"> 
                                       <div>回报周期</div>
                                        <div>
                                            <div :class="[investment.return_cycle>7?'fontNum_28':'']">{{investment.return_cycle}}</div>
                                            <div>月</div>
                                        </div>
                                    </div>  
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content bg-purple"> 
                                        <div>回报率</div>
                                         <div>
                                            <div :class="[investment.return_rate>7?'fontNum_28':'']">{{investment.return_rate}}</div>
                                            <div>%</div>
                                        </div>
                                        <div :class ="[investment.return_compare.is_rise=='1'?'':'rise_down']">
                                            {{investment.return_compare.rate+'%'}}<i :class="['iconfont',investment.return_compare.is_rise=='1'?'icon-up':'icon-down']"></i>
                                        </div> 
                                    </div>  
                                </el-col>
                            </el-row>
                        </div>
                        <div class="chartShow">
                            <div class="tit">投资回报率</div>
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
import getDate from '../../../assets/js/dateSelect';
import Highcharts from 'highcharts';
import {forecastOptionPie} from '../../../assets/js/chart-options';
import {statisticsForecast} from '../../../api/global';
import {mapGetters} from 'vuex'
export default {
  components: {MainNav,searchDate},
  name: "forecast", //投资预算
  data(){
      return {
          date:"",
          investment:""
      }
  },
  computed:{
      ...mapGetters([
          'shop_list_current'
      ])
  },
 methods:{
     changeDate(){
         this.forecastInit();
     },
     seachtrigger(){
         this.forecastInit();
     },
     pieCenter(){
         
    },
    formtPie(){
        if(100- this.investment.return_rate*1 < 0){
            this.investment.y1 = this.investment.return_rate * 1;
             this.investment.y2 = 0
        }else{
             this.investment.y1 = this.investment.return_rate * 1;
             this.investment.y2 = 100 -  this.investment.y1*1
        }
    },
    forecastInit(){
        statisticsForecast({
            shop_id:this.shop_list_current,
            date:this.date
        })
        .then(res=>{
             var chart = null;
             var self = this;
            this.investment = res.data.data;
            this.formtPie();
            console.log(this.investment)
            Highcharts.chart('contain',forecastOptionPie(Highcharts,this.investment.y1+'%',this.investment.y1,this.investment.y2),function(c){
            var centerY = c.series[0].center[1],
                titleHeight = parseInt(c.title.styles.fontSize);
            c.setTitle({
                y:centerY + titleHeight/2
            });
            chart = c;
            })
        })
    }
 },
 created(){
      this.date = getDate.getMonth();
      this.forecastInit();
 },
 mounted(){
    
     
 }
};
</script>

<style scoped lang="scss">
    .el-date-editor.el-input.el-input--prefix.el-input--suffix.el-date-editor--month{
        position: absolute;
        right:30px;
    }
     .chartShow{
        width:100%;
        height: 500px;
        background-color: #ffffff;
        margin-top: 6px;
        padding-bottom: 200px;
        & .tit{
            font-size: 18px;
            line-height: 26px;
            letter-spacing: 1px;
            color: #4d4d4d;
            padding: 28px 0 0 28px;
        }
    }
 .dataListBox{
        padding: 0 13px;
        background-color:#ffffff;
    }
    .dataListBox .dataList {
          & > div:nth-child(1) {
            position: relative;
          }
          & .grid-content.bg-purple {
            cursor: pointer;
            border: solid 1px #d3dde0;
            height: 128px;
            position: relative;
          &:hover{
            box-shadow: 0px 1px 6px 0px #d3dde0;
          }
            & > div:nth-child(1) {
              font-size: 14px;
              letter-spacing: 0px;
              color: #4c4c4c;
              padding-left: 12px;
              line-height: 39px;
            }
            & > div:nth-child(2) {
              text-align: center;
              position: relative;
              font-size: 40px;
              line-height: 52px;
              padding: 0 30px;
              & .fontNum_28{
                  font-size: 28px;
              }
              & > div:nth-child(1){
                color: #4d4d4d;
              }
              & > div:nth-child(2){
                font-size: 16px;
                line-height: 26px;
                letter-spacing: 1px;
                color: #4c4c4c;
                position: absolute;
                bottom: 0;
                right: 12px;
              }
            }
            & > div:nth-child(3) {
              line-height: 38px;
              position: relative;
              text-align: right;
              font-size: 12px;
              letter-spacing: 0px;
              color: #ff6648;
              padding-right:12px;
              & >span{
                  &.rise_down {
                    color: #00c853;
                  }
                }
              }
              
          }
          & > div{
            margin-bottom: 20px;
          }
          & #marking {
            height: 2px;
            position: absolute;
            top: -1px;
            background-color: #ff6648;
          }
  }
</style>