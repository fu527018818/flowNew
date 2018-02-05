
export function addOptions(titledata,date,turnover,volume,tit1,tit2){
    // main页图标option 
   return {
            chart: {
                zoomType: 'xy',
                animation:true,
                marginLeft:80,
                marginRight:50,
            },
            title: {
                text:titledata,
                align:"left",
                x:30,
                y:30,
                margin:50,
                style:{
                    fontSize:"18px",
                    color:"#4d4d4d"
                }
            },
            credits: {
                enabled: false
            },
            xAxis: [{
                categories:date,
                minTickInterval:2
                }],
            yAxis: [{ 
                labels: {
                    format: '{value}',
                    style: {
                    
                    }
                },
                title: {
                    text: null
                }
            }, { // Secondary yAxis
                title: {
                    text: null,
                    style: {
                    }
                },
                opposite: true,
                visible:false
            }],
            tooltip: {
                shared: true,
            },
            series: [{
                name: tit1,
                type: 'column',
                color:"#48a7ff",
                yAxis: 1,
                data:turnover
                
            },{
                name: tit2,
                type: 'spline',
                color:"#ff6648",
                data: volume,

            }]
    }

}
// 客户页面option 柱形 - 统计客流页 isShow是否显示柱形上面的值
export function userOptionColumn(tit,datex,y,isShow){
  return  {
        chart: {
            type: 'column'
        },
        title: {
            text: tit,
            align:"left",
            x:30,
            y:30,
            margin:50,
            style:{
                fontSize:"18px",
                color:"#4d4d4d"
            }
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: isShow||false,
                    allowOverlap: true
                }
            }
        },
        legend:{
        enabled:false
        },
        xAxis: {
            categories:datex
        },
        yAxis: {
            labels: {
                x: -15
            },
            title: {
                text:null
            }
        },
        series: [{
            name: '年龄',
            data:y,
            color:"#4198ff"
        }],
        // responsive: {
        //     rules: [{
        //         condition: {
        //             maxWidth: 500
        //         },
        //         // Make the labels less space demanding on mobile
        //         chartOptions: {
        //             xAxis: {
        //                 labels: {
        //                     formatter: function () {
        //                         return this.value.replace('月', '')
        //                     }
        //                 }
        //             },
        //             yAxis: {
        //                 labels: {
        //                     align: 'left',
        //                     x: 0,
        //                     y: -2
        //                 },
        //                 title: {
        //                     text: ''
        //                 }
        //             }
        //         }
        //     }]
        // }
    }  
}
// 客户页面 圆型图 -统计客流页
export function userOptionPie (tit,data){
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            marginLeft:-200
        },
        title: {
            text: tit,
            align:"left",
            x:30,
            y:30,
            margin:50,
            style:{
                fontSize:"18px",
                color:"#4d4d4d"
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        legend: {
            align: 'left',
            verticalAlign: 'bottom',
            x:80
        },
        plotOptions: {
            pie: {
                // allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            innerSize: '70%',
            name:tit,
            data:data
        }]
    }
}
//投资测算页面，只展示
export function forecastOptionPie(Highcharts,tit,y1,y2){
    Highcharts.getOptions().colors=['#4096ff','#e5f1ff'];
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            spacing : [50, 0 , 0, 0]
        },
        title: {
            text: tit,
            floating:true,
            style:{
                fontSize:"40px",
                color:"#4d4d4d"
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled:false,
        },
        legend: {
            enabled:false
        },
        plotOptions: {
            pie: {
                // allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            innerSize: '70%',
            name: '男女比例',
            data:[{
                name:"回报率",
                y:150
            },{
                name:"投资总额",
                y:0
            }]
        }]
    }
}
// 线图
export function statisticsSpline(name,dateX,datay1,datay2){
    return {
        chart: {
            zoomType: 'xy',
            animation:true,
            marginLeft:80,
            marginRight:50,
            marginTop:50
        },
        title: {
            text:'',
            align:"left",
            x:30,
            y:30,
            margin:50,
            style:{
                fontSize:"18px",
                color:"#4d4d4d"
            }
        },
        credits: {
            enabled: false
        },
        xAxis: [{
            categories:dateX
            }],
        yAxis: [{ 
            labels: {
                format: '{value}',
                style: {
                
                }
            },
            title: {
                text: null
            }
        }, { // Secondary yAxis
            title: {
                text: null,
                style: {
                }
            },
            opposite: true,
            visible:false
        }],
        tooltip: {
            shared: true,
        },
        series: [{
            name:name[0],
            type: 'spline',
            color:"#ff6648",
            yAxis: 1,
            data:datay1
            
        }, {
            name: name[1],
            type: 'spline',
            color:"#48a7ff",
            data:datay2,

        }]
}   
}
//漏斗图
export function passengerFunnel(){
    return {
        chart: {
            type: 'pyramid',
            marginRight: 100
        },
        title: {
            text: '人流漏洞',
            x: -50
        },
        plotOptions: {
            series: {
                reversed: false,
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                }
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: '漏斗图',
            data: [
                {
                 name:"总人流",
                 y:2505,
                 color:"#00c853",
                },
                {
                    name:"客流量",
                    y:38,
                    color:"#ff6648"
                },
                {
                    name:"成交量",
                    y:934,
                    color:"#4198ff"
                },
            ]
        }]
    }
}   
// 单线图
export function statisticsOneSpline(title,date,tit1,y){
    return {
        chart: {
            zoomType: 'xy',
            animation:true,
            marginLeft:80,
            marginRight:50,
        },
        title: {
            text:title,
            align:"left",
            x:30,
            y:30,
            margin:50,
            style:{
                fontSize:"18px",
                color:"#4d4d4d"
            }
        },
        credits: {
            enabled: false
        },
        xAxis: [{
            categories:date
            }],
        yAxis: [{ 
            labels: {
                format: '{value}',
                style: {
                
                }
            },
            title: {
                text: null
            }
        }, { // Secondary yAxis
            title: {
                text: null,
                style: {
                }
            },
            opposite: true,
            visible:false
        }],
        tooltip: {
            shared: true,
        },
        series: [{
            name:tit1,
            type: 'spline',
            color:"#ff6648",
            data: y 
        }]
    }
}
// 单线图或者双线图
export function statisticsOneOrTwoSpline(Highcharts,title,date,data){
    Highcharts.getOptions().colors=['#ff6648','#48a7ff']
    return {
        chart: {
            zoomType: 'xy',
            type: 'spline',
            animation:true,
            marginLeft:80,
            marginRight:50,
        },
        title: {
            text:title,
            align:"left",
            x:30,
            y:30,
            margin:50,
            style:{
                fontSize:"18px",
                color:"#4d4d4d"
            }
        },
        credits: {
            enabled: false
        },
        xAxis: [{
            categories:date,
            // minTickInterval:2
            }],
        yAxis: [{ 
            labels: {
                format: '{value}',
                style: {
                
                }
            },
            title: {
                text: null
            }
        }, { // Secondary yAxis
            title: {
                text: null,
                style: {
                }
            },
            opposite: true,
            visible:false
        }],
        tooltip: {
            shared: true,
        },
        series:data
    }
}
export default {
    addOptions,
    userOptionColumn,
    userOptionPie,
    statisticsSpline,
    statisticsOneSpline,
    statisticsOneOrTwoSpline,
    forecastOptionPie
}