<template>
    <div class="app">
          <main-nav :indexMenu="'/statistics/analyze/effectiveness'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <search-date :isShowDate="false"  :isShowId="true"  :tit="'坪效'" @seachtrigger="seachtrigger">
                        <el-date-picker
                            @change="changeDate"
                            v-model="date"
                            slot="selectDate"
                            type="month"
                            value-format="yyyy-MM"
                            placeholder="选择月">
                        </el-date-picker>
                    </search-date>
                    <div class="dataListBox" v-if="chart">
                        <el-row :gutter="10" class="dataList">
                            <el-col :span="6">
                                <div class="grid-content bg-purple"> 
                                    <div>{{chart.groundeffect.name}}</div>
                                    <div>
                                        <el-row :gutter="0" class="numList">
                                            <el-col :span="18">{{chart.groundeffect.value}}</el-col>
                                            <el-col :span="6">
                                                <span>{{chart.groundeffect.unit}}</span>
                                            </el-col>
                                        </el-row>
                                    </div>
                                    <div :class ="[chart.groundeffect.is_rise=='1'?'':'rise_down']">
                                        {{chart.groundeffect.compare_rate+'%'}}<i :class="['iconfont',chart.groundeffect.is_rise=='1'?'icon-up':'icon-down']"></i>
                                    </div>
                                </div>  
                            </el-col>
                            <el-col :span="6">
                                <div class="grid-content bg-purple"> 
                                    <div>{{chart.turnover.name}}</div>
                                    <div>
                                        <el-row :gutter="0" class="numList">
                                            <el-col :span="18" class="profit">{{chart.turnover.value}}</el-col>
                                            <el-col :span="6">
                                                <span>{{chart.turnover.unit}}</span>
                                            </el-col>
                                        </el-row>
                                    </div>
                                    <div :class ="[chart.turnover.is_rise=='1'?'':'rise_down']">
                                        {{chart.turnover.compare_rate+'%'}}<i :class="['iconfont',chart.turnover.is_rise=='1'?'icon-up':'icon-down']"></i>
                                    </div>
                                </div>  
                            </el-col>
                            <el-col :span="6">
                                <div class="grid-content bg-purple"> 
                                    <div>{{chart.shop_area.name}}</div>
                                    <div>
                                        <el-row :gutter="0" class="numList">
                                            <el-col :span="18" class="col_rest">{{chart.shop_area.value}}</el-col>
                                            <el-col :span="6">
                                                <span>{{chart.shop_area.unit}}</span>
                                            </el-col>
                                        </el-row>
                                    </div>
                                    <div :class ="[chart.shop_area.is_rise=='1'?'':'rise_down']">
                                        <!-- {{chart.shop_area.compare_rate+'%'}}<i :class="['iconfont',chart.shop_area.is_rise=='1'?'icon-up':'icon-down']"></i> -->
                                    </div>
                                </div>  
                            </el-col>
                        </el-row>
                    </div>
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
import getDate from '../../../assets/js/dateSelect';
import {statisticsgroundGffect} from '../../../api/global';
import {mapGetters} from 'vuex';
import formatbg from '../../../assets/js/formatterbg';
import Highcharts from 'highcharts';
import {statisticsOneSpline} from '../../../assets/js/chart-options.js';
export default {
  components: {MainNav,searchDate},
  name: "effectiveness",//坪效
  data(){
      return{
          date:"",
          chart:""
      }
  },
  computed:{
      ...mapGetters([
          'shop_list_current'
      ])
}, 
 created(){
     this.date = getDate.getMonth()
     this.effectInit(this.date)
  },
  methods:{ //改变日期
      changeDate(val){
          this.effectInit(val);
      },//初始化数据
      effectInit(val){
          statisticsgroundGffect({
              shop_id:this.shop_list_current,
              date:val
          })
          .then(res=>{
              this.chart = res.data.data.chart;
               var current = formatbg.formatOneSpline(res.data.data.graphic.data1)
               Highcharts.chart('contain',statisticsOneSpline(current.name,current.date,current.line[0],current.y))
          })
      }, //切换店铺
      seachtrigger(){
          this.effectInit(this.date)
      }
  },
  watch:{
      
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
    }
</style>