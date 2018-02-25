<template>
    <div class="main">
        <div class="pcLogin">
            <div class="headline">
                <div class="pwdTit">
                    登录
                </div>
                <div class="pwdHint">
                    请输入手机号登录
                </div>
            </div>
            <div class="loginBox">
                <a class="userHead" href="javascript:void(0);">
                    <img src="../assets/img/default_head.png" alt="头像">
                </a>
                <form>
                    <div class="userIpt">
                        <input id="userId"  @keyup.enter.prevent="loginEnter" v-focus type="text" placeholder="请输入您账号" autocomplete="off">
                    </div>
                    <div class="error_tit" style=" visibility: hidden;">
                          <img @click="closeTit" src="../assets/img/error_tit.png" alt="错误提示">
                          <div class="errorMeassge">账号错误请重试</div>
                    </div>
                    <el-button id="loginBtn"  type="info" :loading="loading" @click.enter="loginEnter">下一步</el-button>
                </form>
            </div>
        </div>
    <div class="copyright">
        版权所有 (C) 厦门灵友信息科技有限公司
        <a href="javascript:void(0)">Copyright © 2014-2020</a>
    </div>
    </div>
     
</template>

<script>
import path from '../api/path'
export default {
  name: "loginAccount",
  data() {
    return {
        loading:false
    };
  },
  methods: {
    loginEnter: function(e) {
      e.preventDefault();
      this.loading = true;
      var regMobile = /^1[3857]{1}\d{9}$/;
      var $userId = $("#userId").val().trim();
      // 路由跳转
      if (!regMobile.test($userId)) {
        this.loading = false;
        this.showTip("手机号码格式错误");
        return false;
      }
    //用户登录
     this.$store.dispatch('userLogin',{'url':path.USER_ACC,userJson:{id:$userId}}).then(data=>{
         this.loading = false;
         if(data.status=="200"&&!data.status==""){
                ls.set('userId',$userId)
               this.$router.push({name:'loginPwd'})
         }else{
             this.showTip(data.message);
         }
         
      });
   
      
    },   // 错误提示
 showTip(msg) {
        var $tip = $(".errorMeassge");
        var $tipBox = $('.error_tit')
        $tip.text(msg);
        $tipBox.css({
          visibility: "visible",
          lineHeight: "32px"
        });
        setTimeout(function() {
          $tipBox.css({
            visibility: "hidden",
            lineHeight: "inherit"
          });
        }, 3000);
      },
      closeTit(){
           var $tipBox = $('.error_tit')
           $tipBox.css({
            visibility: "hidden",
            lineHeight: "inherit"
          });
      }
  },
  created() {
  },
  beforeCreate(){
  
  }
};
</script>

<style scoped lang="scss">
@import "../assets/css/login.css";
    html,body{
        width: 100%;
        height: 100%;
    }
   
</style>
