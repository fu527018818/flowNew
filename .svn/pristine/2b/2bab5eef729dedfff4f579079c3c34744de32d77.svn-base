<template>
    <div class="app">
        <main-nav :indexMenu="'/userPortrayal'"></main-nav>
        <div class="contentBox" v-slim-scroll>
             <div class="contentBox_child">
                <div class="content">
                    <user-portrayalt-tit :chart="chart"></user-portrayalt-tit>
                    <div class="userChartBox">
                        <el-row class="userChart">
                            <el-col :span="12">
                                <div class="grid-content">
                                    <div class="chart" id="contain1" style="height:100%"></div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content">
                                    <div class="chart" id="contain2" style="height:100%"></div>
                                </div>
                            </el-col>
                             <el-col :span="12">
                                <div class="grid-content">
                                    <div class="chart" id="contain3" style="height:100%"></div>
                                </div>
                            </el-col>
                             <el-col :span="12">
                                <div class="grid-content">
                                    <div class="chart" id="contain4" style="height:100%"></div>
                                </div>
                            </el-col>
                             <el-col :span="12">
                                <div class="grid-content">
                                    <div class="chart" id="contain5" style="height:100%"></div>
                                </div>
                            </el-col>
                             <el-col :span="12">
                                <div class="grid-content">
                                    <div class="chart" id="contain6" style="height:100%"></div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content">
                                    <div class="dataDisplay" v-if="customer_ratio">
                                        <div>
                                            <span class="dataName">会员：</span>
                                            <span class="numDate">{{customer_ratio.data[0].value}}</span>
                                            <span class="dataUnit">人</span>
                                        </div>
                                        <div>
                                            <span class="dataName">非会员：</span>
                                            <span class="numDate">{{customer_ratio.data[1].value}}</span>
                                            <span class="dataUnit">人</span>
                                        </div>
                                    </div>
                                    <div class="chart" id="contain7" style="height:100%"></div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content">
                                    <div class="dataDisplay" v-if="gender_ratio">
                                            <div>
                                                <span class="dataName">男客：</span>
                                                <span class="numDate">{{gender_ratio.data[0].value}}</span>
                                                <span class="dataUnit">人</span>
                                            </div>
                                            <div>
                                                <span class="dataName">女客：</span>
                                                <span class="numDate">{{gender_ratio.data[1].value}}</span>
                                                <span class="dataUnit">人</span>
                                            </div>
                                    </div>
                                    <div class="chart" id="contain8" style="height:100%"></div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="contentFooter"></div>
            </div>
         </div>
        <div class="m_footer"></div>
    </div>
</template>
<script>
    import MainNav from '../components/MainNav';
    import UserPortrayaltTit from '../components/user/userPortrayaltTit.vue';
    import Highcharts from 'highcharts';
    import {userOptionColumn,userOptionPie} from '../assets/js/chart-options';
    import {userPortrayal}from '../api/global';
    import {mapGetters} from 'vuex';
    import formattBg from '../assets/js/formatterbg';
    export default {
        name:"userPortrayal",
        components:{MainNav,UserPortrayaltTit},
        data(){
            return {
              chart:"",
              gender_ratio:"", //男女占比
              customer_ratio:"" //会员比

            }
        },
        computed:{
            ...mapGetters([
                'shop_list_current'
            ])
        },
        mounted(){
           
            //   Highcharts.chart('contain2',userOptionColumn())
            //   Highcharts.chart('contain3',userOptionPie())
            //   Highcharts.chart('contain4',userOptionPie())
        },
        methods:{
          portrayalInit(){
           userPortrayal({
              shop_id:this.shop_list_current
           })
           .then(res=>{
               var data = res.data.data
               this.chart = data.chart;
               //格式化图表并渲染 
               var current_consumption_times =formattBg.formatOneBar(data.graphic.consumption_times);
               Highcharts.chart('contain1',userOptionColumn(current_consumption_times.name,current_consumption_times.dateX,current_consumption_times.y,true))

               var current_consumption_price =formattBg.formatOneBar(data.graphic.consumption_price);
               Highcharts.chart('contain2',userOptionColumn(current_consumption_price.name,current_consumption_price.dateX,current_consumption_price.y,true))

               var current_loss_member =formattBg.formatOneBar(data.graphic.loss_member);
               Highcharts.chart('contain3',userOptionColumn(current_loss_member.name,current_loss_member.dateX,current_loss_member.y))

               var current_conversion_rate =formattBg.formatOneBar(data.graphic.conversion_rate);
               Highcharts.chart('contain4',userOptionColumn(current_conversion_rate.name,current_conversion_rate.dateX,current_conversion_rate.y))
               
               var current_average_visit =formattBg.formatOneBar(data.graphic.average_visit);
               Highcharts.chart('contain5',userOptionColumn(current_average_visit.name,current_average_visit.dateX,current_average_visit.y,true))

              var current_age_ratio =formattBg.formatOneBar(data.graphic.age_ratio);
               Highcharts.chart('contain6',userOptionColumn(current_age_ratio.name,current_age_ratio.dateX,current_age_ratio.y,true))
                
               var current_customer_ratio = formattBg.formatPieUser(data.graphic.customer_ratio);
                this.customer_ratio  = current_customer_ratio
                Highcharts.chart('contain7',userOptionPie(current_customer_ratio.name,current_customer_ratio.format))
                
               var current_gender_ratio = formattBg.formatPieUser(data.graphic.gender_ratio);
               this.gender_ratio= current_gender_ratio;
                Highcharts.chart('contain8',userOptionPie(current_gender_ratio.name,current_gender_ratio.format))
           })
         }
        },
        created(){
            this.portrayalInit()
        },

    }
</script>

<style scoped lang="scss">
    .userChartBox{
        width: 100%;
        margin-top: 6px;
    }
    .userChart .el-col.el-col-12{
        height: 377px;
        &:nth-child(2n-1){
            padding-right: 3px;
            padding-bottom: 6px;
        }
        &:nth-child(2n){
            padding-left: 3px;
            padding-bottom: 6px;
        }
        & .grid-content{
            width: 100%;
            height: 100%;
            background-color: #ffffff;
            position: relative;
        }
    }
    .m_footer{
        width: 100%;
        height: 45px;
        background-color: #3987e6;
    }
    .dataDisplay{
        position: absolute;
        right:40px;
        top: 50%;
        z-index: 10;
        transform: translate(0,-50%);
        & > div{
            font-family: MicrosoftYaHeiLight;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #4c4c4c;
            height: 40px;
            line-height: 40px;
            position: relative;
        }
        .numDate{
            display: inline-block;
            text-align: center;
            font-family: MicrosoftYaHeiLight;
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 2px;
            color: #4c4c4c;
            width: 100px;
            overflow: hidden;
            height: 40px;
            line-height: 40px;
            padding-left: 65px;
        }
        .dataName{
           width: 70px;
           position: absolute;
           top:0;
           text-align: right;
        }
        .dataUnit{
            position: relative;
            top: -6px;
        }
       & > div:nth-child(1){
           margin-bottom: 20px;
            
       }
       & > div:nth-child(2){
           margin-top: 20px;
       }
    }
</style>