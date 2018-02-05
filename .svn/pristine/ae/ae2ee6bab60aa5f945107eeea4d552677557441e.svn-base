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
                                            <el-row :gutter="0" class="numList">
                                                <el-col :span="18">{{investment.forecast_total_price}}</el-col>
                                                <el-col :span="6">
                                                    <span>元</span>
                                                </el-col>
                                            </el-row>
                                        </div>
                                        <!-- <div :class ="[chart.traveler.is_rise=='1'?'':'rise_down']">
                                            {{chart.traveler.compare_rate+'%'}}<i :class="['iconfont',chart.traveler.is_rise=='1'?'icon-up':'icon-down']"></i>
                                        </div>  -->
                                    </div>  
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content bg-purple"> 
                                        <div>预计年利润</div>
                                         <div>
                                            <el-row :gutter="0" class="numList">
                                                <el-col :span="18" class="profit">{{investment.forecast_annual_profit}}</el-col>
                                                <el-col :span="6">
                                                    <span>元</span>
                                                </el-col>
                                            </el-row>
                                        </div>
                                    </div>  
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content bg-purple"> 
                                       <div>回报周期</div>
                                         <div>
                                            <el-row :gutter="0" class="numList">
                                                <el-col :span="18" class="col_rest">{{investment.return_cycle}}</el-col>
                                                <el-col :span="6">
                                                    <span>月</span>
                                                </el-col>
                                            </el-row>
                                        </div> 
                                    </div>  
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content bg-purple"> 
                                        <div>回报率</div>
                                        <div>
                                            <el-row :gutter="0" class="numList">
                                                <el-col :span="18" class="col_rest">{{investment.return_rate}}</el-col>
                                                <el-col :span="6">
                                                    <span>%</span>
                                                </el-col>
                                            </el-row>
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
                <div class="contentFooter"></div>
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
    @import '../../../assets/css/chartlist.scss';
    .el-date-editor.el-input.el-input--prefix.el-input--suffix.el-date-editor--month{
        position: absolute;
        right:30px;
    }
    .dataListBox{
        width: 100%;
        background-color: #ffffff;
        & .dataList{
            padding: 10px 30px 30px 30px;
        }
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
</style>