import Vue from 'vue'

//过滤时间  YYYY-MM-DD HH:mm:ss
let FormatTimeFilter = function (num, fmt = 'YYYY-MM-DD HH:mm:ss') {
  let date = new Date();
  date.setTime(num);
  let o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  let week = {
    '0': '\u65e5',
    '1': '\u4e00',
    '2': '\u4e8c',
    '3': '\u4e09',
    '4': '\u56db',
    '5': '\u4e94',
    '6': '\u516d'
  }
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[date.getDay() + ''])
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}


/**
 * 检测手机号码
 * @param num
 * @returns {*}
 */
let checkMobile=(num)=>{
    var re = /^1[3,4,5,7,8]\d{9}$/;
    return re.test(num);
}
/**
 * 检测座机号码
 * @param num
 * @returns {*}
 */
let checkTelephone=(num)=>{
    var phoneReg = /(^\+86\.\d{3,5}\d{6,8}$)|(^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$)/;
    return phoneReg.test(num);
}

//过滤距离
let MathDestFilter = function(num){
  var dest = (num/1000>=1)?( Math.round((Math.floor(num/1000)+(num%1000/1000))*100)/100 )+'km':(Math.round(num%1000)+'m');
  return dest;
}

let defaultNoResult = function(string){
  return string||'未填写';
}

/********************************华丽分割线***************************************/

/**
 * 检测电话号码
 * @param num
 * @returns {*}
 */
let checkPhone =(num)=>{
    return checkMobile(num) || checkTelephone(num);
}
/**
 * 校验是否字符串包含中文字符
 *
 * @returns
 */
let containChinese=(string)=>{
    var re = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
    return re.test(string);
}
/**
 * 判断是否为URL地址
 *
 * @returns
 */
let isUrl=(str)=>{
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}

/**
 * 
 * @desc  判断是否为身份证号
 * @param  {String|Number} str 
 * @return {Boolean}
 */
let isIdCard=(str)=>{
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
}


/**
 * 
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean} 
 */
let isEmail=(str)=>{
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}


/**
 * 
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
export const isEmptyObject=(obj)=>{
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
        return false
    return !Object.keys(obj).length
}

export const install = function(Vue, config = {}) {
  if (install.installed) return;
  Vue.filter('FormatTime',FormatTimeFilter);
  Vue.filter('MathDest',MathDestFilter);
  Vue.filter("defaultNot",defaultNoResult);
  // 自定义指令
  Vue.directive('focus',{
      inserted:function (el,binding) {
          // 获取焦点
          el.focus()
      }
  })
  Vue.directive('slimScroll',{
          inserted: function (el,binding) {
              $(el).slimScroll({
                  width: '100%',
                  height: '100%',
                  color: '#4198FF',
                  railColor: '#F2F2F2',
                  railVisible: true,
                  alwaysVisible: true
                  });
            }
  })
  Vue.prototype.$isPhone=checkPhone;
  Vue.prototype.$isChinese=containChinese;
  Vue.prototype.$isIdCard=isIdCard;
  Vue.prototype.$isEmail=isEmail;
  Vue.prototype.$isUrl=isUrl;

 
};



// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};
