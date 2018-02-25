<template>
    <div class="main">
        <div class="pcLogin">
            <div class="headline">
                <div class="pwdTit">
                    输入密码
                </div>
                <div class="pwdHint">
                    请输入您的密码
                </div>
            </div>
            <div class="loginBox">
                <div>
                    <div @click="goBack" class="goBack">
                        返回
                    </div>
                </div>
                <a id="userHead" class="userHead" href="javascript:void(0);">
                    <img :src="userInfo.avatar||'../assets/img/default_head.png'" alt="用户头像">
                </a>
                <div class="userName">{{userInfo.real_name}}</div>
                <form>
                    <div class="userIpt" v-if="isHidePw">
                        <input id="userPw" v-focus class="userPw" type="password" @keyup.enter.prevent="loginEenter" placeholder="请输入密码" autocomplete="off">
                        <div class="isShowBox" @click="isShowPw">
                            <img src="../assets/img/show_pw.png" alt="显示密码">
                        </div>
                    </div>
                    <div class="userIpt" v-else>
                        <input id="userPw" v-focus class="userPw" type="text" @keyup.enter.prevent="loginEenter" placeholder="请输入密码" autocomplete="off">
                        <div class="isShowBox" @click="isShowPw">
                            <img src="../assets/img/hide_pw.png" alt="显示密码">
                        </div>
                    </div>
                     <div class="error_tit" style=" visibility: hidden;">
                          <img @click="closeTit" src="../assets/img/error_tit.png" alt="错误提示">
                          <div class="errorMeassge">账号错误请重试</div>
                    </div>
                    <el-button id="loginBtn"  type="info" :loading="loading" @click.prevent="loginEenter">登录</el-button>
                </form>
            </div>
        </div>
        <div class="copyright">
            版权所有 (C) 厦门灵友信息科技有限公司
            <a href="javascript:void(0)">Copyright © 2014-2017</a>
        </div>
    </div>
</template>

<script>
    import path from '../api/path';
    import md5 from 'js-md5';
    import {mapGetters} from 'vuex';
    export default {
        name:"loginPwd",
        data (){
            return{
                loading:false,
                isHidePw:true
            }
        },
        computed:{
            ...mapGetters([
               'userInfo'
            ])
        },
        methods:{
            goBack:function (){
            this.$confirm('是否切换到账号登录界面？', '提示：', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                closeOnClickModal: false,
                type: 'warning'
                }).then(() => {
                    ls.rm('userId');
                    this.$router.push({name:'loginAccount'});
               }, ()=>{});
            },
            loginEenter:function (){
                 this.loading = true;
              //错误提示
               var userPw =  $('#userPw').val().trim();
               function check(str) { var cnt = 0; if (/[a-zA-Z]+/.test(str)) cnt++;  if (/[0-9]+/.test(str)) cnt++; if (/_+/.test(str)) cnt++; if (cnt < 2) return false; return /^\w{6,20}$/.test(str); }
               
              if(!check(userPw)){
                  this.loading = false;
                  this.showTip('密码为6到20位数字与字母组合或下划线')
                  return false
              }
            //用户登录
            var userJson = {
                id:ls.get('userId'),
                password:md5(userPw)    //后台协议，进行MD5后传给后台
            };
             this.$store.dispatch('userLogin',{url:path.USER_PWD,userJson:userJson}).then(res=>{
                 console.log(res)
                 this.loading = false;
                 if(res.status=="200"&&res.message=="登录成功"){
                      this.$router.push({name:"main"})
                      
                 }else{
                      this.showTip(res.message);
                 }
             }) 
        },
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
      },
                isShowPw(){
                    this.isHidePw = !this.isHidePw;
                }
        },
        created(){
            // this.$socket.disconnect()
        },
        beforeCreate(){
           
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/login.css';
      
    .userPw{
        padding-right:48px;
        position: relative;
    }
    .isShowBox{
        cursor: pointer;
        display: inline-block;
        height: 40px;
        width: 48px;
        position: absolute;
        top:0;
        right: 0;
    }
    .userName{
        font-size: 18px;
        letter-spacing: 1px;
        color: #4c4c4c;
        margin: 10px 0 38px;
    }
    .loginBox{
        & > div:nth-child(1){
             text-align:left;
                &  .goBack{
                display: inline-block;
                line-height: 45px;
                padding-left: 33px;
                position: relative;
                font-size: 14px;
                letter-spacing: 0px;
                color: #4c4c4c;
                user-select: none;
                cursor: pointer;
                &::before{
                    content: "";
                    width:10px;
                    height: 14px;
                    background: url('../assets/img/callback.png') 100% 100% no-repeat;
                    position: absolute;
                    top: 50%;
                    transform: translate(0,-50%);
                    left:18px;
                }
            }
        }
         
    }
    
</style>