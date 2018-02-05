import { format } from "path";
import getDate from '../../assets/js/dateSelect';
/*格式化后台数据*/
export default{
    // 线形图
    formatSpline: function (rate,unit){
        rate.dateX=[];
        rate.y=[];
        for(var i=0;i<rate.data.length;i++){
            rate.dateX.push(rate.data[i].name + unit)
            rate.y.push(rate.data[i].data[0]*1)
        }
        return rate
    },
    // 饼图  passengerFlow 统计页
    formatPie:function(data,def){
        var def = def ||[{color:'#4198ff'},{color: "#ff6648"}] //默认图表颜色
        var  arrVal=[];
        for(var i=0;i<data.data.length;i++){
            def[i].name = data.data[i].name;
            def[i].y = data.data[i].data[0] * 1;
        }
        data.format = def
        return  data
    }, //格式化不同的饼图
    formatPieUser(data){
        var def = def ||[{color:'#4198ff'},{color: "#ff6648"}] //默认图表颜色
        for(var i=0;i<data.data.length;i++){
            def[i].name = data.data[i].key
            def[i].y = data.data[i].value * 1;
        }
        data.format = def
        return data
    },
    //格式化单线数据
    formatOneSpline:function(data){
        var obj = {};
        obj.name = data.name;
        obj.date =[];
        obj.y=[];
        obj.line=data.line;
        for (var i=0;i<data.data.length;i++){
            obj.date.push(data.data[i].name);
            obj.y.push(data.data[i].data[0]*1);
        }
        return obj
  },//格式话单线或者双线
  formatOneOrTwoSpline:function(data){
        var obj = {};
        if(data.line.length==2){
            obj.name=data.name;
            obj.date = [];
            obj.line = data.line;
            obj.y1 = [];
            obj.y2 = [];
            obj.series = [];
            for(var i=0;i<data.data.length;i++){
                obj.date.push(data.data[i].name);
                obj.y1.push(data.data[i].data[0]*1);
                obj.y2.push(data.data[i].data[1]*1);
            }
            for(var j=0;j< data.line.length ;j++){
                var obj1 = {};
                obj1.name = data.line[j];
                obj.series.push(obj1)
            }
            obj.series[0].data = obj.y1;
            obj.series[1].data = obj.y2;
        }else{
            obj.series=[];
            obj.name = data.name;
            obj.line = data.line;
            obj.y1=[];
            obj.date = [];
            for(var i=0;i<data.data.length;i++){
                obj.date.push(data.data[i].name);
                obj.y1.push(data.data[i].data[0]*1); 
            }
            obj.series.push({
                name:obj.line[0],
                data:obj.y1
            })
         
        }
    return  obj;
    
  }, 
  formatOneBar(data){
      data.dateX=[];
      data.y = [];
      data.data.forEach(function (item){
        data.dateX.push(item.name);
        data.y.push(item.value*1);
      })
     return data
  },//格式化快捷时间
  getClockerDate(val){
    switch (val){
        case '今天':
            return  getDate.getToday()
        break;
        case '昨天':
           return  getDate.getYesterdayDate()
        break;
        case '本周':
            return  getDate.getWeekDate()
        break;
        case '上周':
           return  getDate.getUpWeekDate()
        break;
        case '本月':
           return  getDate.getMonthDate()
        break;
        case '上月':
           return  getDate.getLastMonthDate()
        break;
        case '近七天':
          return  getDate.getToday()
        break;
    }
  },  //格式化分页算出总页数
  formatPageDate(limit,page,tolNum){
      return {
          limit:limit,
          page:page,
          tolPage: Math.ceil(tolNum*1/limit*1)
      }
  }
}