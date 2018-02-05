<template>
    <div class="mainChart">
        <div class="chart" id="#container" style="height:500px">
        </div>
    </div>
</template>

<script>
    import Highcharts from 'highcharts';
    export default {
        date (){
            return{
            }
        },
        methods:{
            realTime(){
                 var _self = this;
                 clearInterval(this.timer);
                Highcharts.setOptions({
                        global: {
                            useUTC: false
                        }
            });
            // 添加数据 重新渲染
            function activeLastPointToolip(chart) {
                var points = chart.series[0].points;
                chart.tooltip.refresh(points[points.length -1]);
            }
           //添加表格数据    
           function addPointData(chart){
                var series = chart.series[0],
                    series1 = chart.series[1];
                    _self.timer = setInterval(function () {
                        $.ajax({
                            url:"http://appdev.ly.ai/notification/realtime",
                            data:{shop_id:ls.get('shop_list_current')},
                            type:"post",
                            dataType:'json',
                            success:function(res){
                                var data = res.data;
                                var x = (new Date()).getTime()
                                series.addPoint([x,data.turnover*1], true, true);
                                series1.addPoint([x,data.passenger*1], true, true);
                                activeLastPointToolip(chart)
                            },
                            error:function(){

                            }
                        },false)
                        
            }, 5000);
           }
            // 初始化 highcharts
            Highcharts.chart('#container',{
                chart: {
                    zoomType: 'xy',
                    animation:true,
                    marginLeft:80,
                    marginRight:50,
                    events: {
                        load: function () {
                               var  chart = this
                              addPointData(chart)
                        }
                    }
                }, //去掉水印
                 credits: {
                    enabled: false
                },
                title: {
                    text: '营业额vs客流量走势图',
                    align:"left",
                    x:30,
                    y:30,
                    margin:50,
                    style:{
                        fontSize:"18px",
                        color:"#4d4d4d"
                    }
                },
                xAxis: {
                    type: 'datetime',
                    tickPixelInterval:150
                },
                yAxis: [{
                    title: {
                        text: null
                    },
                    labels:{
                       format:"{value}",
                       align: 'left',
                    }
                },{
                //  linkedTo: 0,  是否显示Y轴坐标
                // gridLineWidth: 0,
                    labels:{
                        format: '{value}',
                        align:'right',
                         x: 0,
                         y: 0,
                    },
                    title:{
                        text:null
                    },
                    opposite:true
                }],
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                            Highcharts.numberFormat(this.y, 2);
                    }
                },
                legend: {
                    enabled:true
                },
                exporting: {
                    enabled: false
                },
                series: [{
                    name: '营业额',
                    type:'spline',
                    color:"#48a7ff",
                    data: (function () {
                        var data = [],
                            time = (new Date()).getTime(),
                            i;
                        for (i = -10; i <= 0; i += 1) {
                           var cc = {
                                x: time + i * 1000,
                                y: 0
                            }
                            data.push(cc);
                        }
                        return data;
                    }())
                },{
                    name: '客流量',
                    type:'spline',
                    color:"#ff6648",
                    data: (function () {
                        var data = [],
                            time = (new Date()).getTime(),
                            i;
                        for (i = -10; i <= 0; i += 1) {
                           var cc = {
                                x: time + i * 1000,
                                y:0
                            }
                            data.push(cc);
                        }
                        return data;
                    }()) 
                }]
                }, function(c) {
                    activeLastPointToolip(c)
                })
            }
        },
        created(){

        },
    mounted(){
},
beforeDestroy:function (){
   clearInterval(this.timer);
}
}
</script>

<style scoped>
    .mainChart{
        width: 100%;
        height: 500px;
        background-color: rgba(255, 255, 255, 1);
        margin-top: 6px;
        -webkit-box-shadow: 0 0 1px #ccc;
        -moz-box-shadow: 0 0 1px #ccc;
        box-shadow: 0 0 1px #ccc; 
    }
    .chartTit{
        font-family: MicrosoftYaHei;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 26px;
        letter-spacing: 1px;
        color: #4d4d4d;
        padding: 30px 0 0 27px;
    }
    #container{
        position: relative;
    }
</style>