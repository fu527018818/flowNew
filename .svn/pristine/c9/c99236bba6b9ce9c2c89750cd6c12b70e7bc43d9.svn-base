<template>
    <div class="app">
          <main-nav :indexMenu="'/statistics/analyze/effectiveness'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <search-date :isShowDate="false"  :isShowId="true"  :tit="'坪效'" @seachtrigger="seachtrigger">
                        <!-- <el-date-picker
                            @change="changeDate"
                            v-model="date"
                            slot="selectDate"
                            type="month"
                            value-format="yyyy-MM"
                            placeholder="选择月">
                        </el-date-picker> -->
                    </search-date>
                    <card-rectangle :chart="chart" :colorChange="colorChange"></card-rectangle>
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
import cardRectangle from '../../../components/common/cardRectangle';
import getDate from '../../../assets/js/dateSelect';
import {statisticsgroundGffect} from '../../../api/global';
import {mapGetters} from 'vuex';
import formatbg from '../../../assets/js/formatterbg';
import Highcharts from 'highcharts';
import {statisticsOneSpline} from '../../../assets/js/chart-options.js';
export default {
  components: {MainNav,searchDate,cardRectangle},
  name: "effectiveness",//坪效
  data(){
      return{
          date:"",
          chart:"",
          colorChange:[12,22]
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
    }
</style>