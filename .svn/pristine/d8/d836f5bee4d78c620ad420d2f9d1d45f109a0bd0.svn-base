import store from '../store/index';
import JsEncrypt from 'jsencrypt/bin/jsencrypt';
import CryptoJS from 'crypto-js';
//登录成功之后加密
export function encryptLogin(accept,data){
        var keyAccept =  CryptoJS.enc.Utf8.parse(accept);
        var str = CryptoJS.AES.encrypt(JSON.stringify(data),keyAccept,{
              mode:CryptoJS.mode.ECB
          }).toString();
          return str
}
//排序
export function objKeySort(arys) { 
  //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
  var newkey = Object.keys(arys).sort();
  var newObj = ''; //创建一个新的对象，用于存放排好序的键值对
  for(var i = 0; i < newkey.length; i++) {
    newObj += newkey[i] + '=' +(typeof arys[newkey[i]]=="object"?JSON.stringify(arys[newkey[i]]):arys[newkey[i]]) + '&';
  }
  return newObj.slice(0,newObj.length-1); //返回排好序的新对象
}
//解密
export  function decode(response,data){

    var keyResponse = CryptoJS.enc.Utf8.parse(response);
    var str =  CryptoJS.AES.decrypt(data.data,keyResponse,{
        mode: CryptoJS.mode.ECB
    })
    data.data=JSON.parse(str.toString(CryptoJS.enc.Utf8));
    return data
  }
    
  //sign排序
  export function signSort(data){
    return CryptoJS.MD5(objKeySort(data)).toString();
  }
export default{
    encryptLogin,
    objKeySort,
    decode,
    signSort
}