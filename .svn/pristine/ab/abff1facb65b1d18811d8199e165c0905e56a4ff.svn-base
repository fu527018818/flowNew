var now = new Date();                    //当前日期     
var nowDayOfWeek = now.getDay();         //今天本周的第几天     
var nowDay = now.getDate();              //当前日     
var nowMonth = now.getMonth();           //当前月     
var nowYear = now.getYear();          //当前年     
var nowHour = now.getHours();         //得到小时
var nowMinute = now.getMinutes(); //得到分钟
var nowSecond =now.getSeconds(); //得到秒
nowYear += (nowYear < 2000) ? 1900 : 0;  //    
var lastMonthDate = new Date();  //上月日期  
lastMonthDate.setDate(1);
lastMonthDate.setMonth(lastMonthDate.getMonth()-1);  
var lastYear = lastMonthDate.getYear();
var lastMonth = lastMonthDate.getMonth();

export default {
    //格式化日期：yyyy-MM-dd     
    formatDate(date) {      
    var myyear = date.getFullYear(); 
    var mymonth = date.getMonth() + 1;     
    var myweekday = date.getDate();      
         
    if(mymonth < 10){     
        mymonth = "0" + mymonth;     
    }      
    if(myweekday < 10){     
        myweekday = "0" + myweekday;     
    }     
    return (myyear+"-"+mymonth + "-" + myweekday);      
    },    
    //获得某月的天数   
    getMonthDays(myMonth){   
        var monthStartDate = new Date(nowYear, myMonth, 1);      
        var monthEndDate = new Date(nowYear, myMonth + 1, 1);      
        var   days   =   (monthEndDate   -   monthStartDate)/(1000   *   60   *   60   *   24);      
        return  days;      
    },
    //获得本季度的开始月份
    getQuarterStartMonth(){
        var quarterStartMonth = 0;
        if(nowMonth<3){
            quarterStartMonth = 0;
        }
        if(2<6){
            quarterStartMonth = 3;
        }
        if(5<9){
            quarterStartMonth = 6;
        }
        if(nowMonth>8){
            quarterStartMonth = 9;
        }
        return quarterStartMonth;
    },
    //今天
    getToday(){
        var getCurrentDate = new Date(nowYear, nowMonth, nowDay);
        return {
            start:this.formatDate(getCurrentDate),
            end:this.formatDate(getCurrentDate)
            }
        },
    getTodayHDS(){
        
        var getCurrentDate = new Date(nowYear, nowMonth, nowDay);
        nowHour = nowHour<10?'0'+nowHour:nowHour;
        nowMinute= nowMinute<10?'0'+nowMinute:nowMinute;
        nowSecond = nowSecond<10?'0'+nowSecond:nowSecond;
        return this.formatDate(getCurrentDate) + ' ' +nowHour+':'+nowMinute+':'+nowSecond
    },
   //今天昨天
   getYesterdayDate(){
        var getYesterdayDate = new Date(nowYear, nowMonth, nowDay - 1);
        var getYesterdayDate = this.formatDate(getYesterdayDate);
        return {
            start:getYesterdayDate,
            end:getYesterdayDate
        }
   },
   getWeekDate(){
           //获得本周的开始日期
            var getWeekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
            var getWeekStartDate =  this.formatDate(getWeekStartDate);
            //获得本周的结束日期
            var getWeekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
            var getWeekEndDate =  this.formatDate(getWeekEndDate);
        return {
            start:getWeekStartDate,
            end: getWeekEndDate
            
        }
   },
   getUpWeekDate(){
      //获得上周的开始日期
    var getUpWeekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek -7);
    var getUpWeekStartDate =  this.formatDate(getUpWeekStartDate);
    //获得上周的结束日期
    var getUpWeekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek - 7));
    var getUpWeekEndDate = this.formatDate(getUpWeekEndDate);
    return {
        start:getUpWeekStartDate,
        end:getUpWeekEndDate
    }
   },
   getMonthDate(){
        //获得本月的开始日期
        var getMonthStartDate = new Date(nowYear, nowMonth, 1);
        var getMonthStartDate =  this.formatDate(getMonthStartDate);

        //获得本月的结束日期
        var getMonthEndDate = new Date(nowYear, nowMonth, this.getMonthDays(nowMonth));
        var getMonthEndDate = this.formatDate(getMonthEndDate);
      return {
          start:getMonthStartDate,
          end:getMonthEndDate
      }
   },
   getLastMonthDate(){
        //获得上月开始时间
    var formatLastYear =  lastMonth==11?nowYear-1:nowYear
    var getLastMonthStartDate = new Date(formatLastYear, lastMonth, 1);
    var getLastMonthStartDate = this.formatDate(getLastMonthStartDate);

    //获得上月结束时间
    var getLastMonthEndDate = new Date(formatLastYear, lastMonth,this.getMonthDays(lastMonth));
    var getLastMonthEndDate = this.formatDate(getLastMonthEndDate);
    console.log(getLastMonthStartDate)
    console.log(getLastMonthEndDate)
    return {
        start:getLastMonthStartDate,
        end:getLastMonthEndDate
    }
   },   // 近七天
getRecentDate(){
        var getCurrentDate = new Date(nowYear, nowMonth, nowDay);
        var getRecentDate = new Date(nowYear, nowMonth, nowDay - 7);
        return {
            start:this.formatDate(getRecentDate),
            end:this.formatDate(getCurrentDate)
        }
   },
getMonth(){
        var nowMonth = new Date().getMonth();
        var nowYear = new Date().getFullYear();
        return nowYear + '-'+(nowMonth*1 + 1)
   }
}