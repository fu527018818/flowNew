<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters,mapState} from 'vuex';
export default {
  name: 'app',
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters([
      'userInfo',
      'shop_list_current',
      'token'
    ]),
    ...mapState({
      newMessage:state=>state.websocket.newMessage
    })
  },
  created(){
      //  this.$socket.emit('login',this.userInfo.user_id)
  },
  watch:{
    //实时推送
    newMessage:function(val){
      var self = this;
      val = JSON.parse(val)
      if(val&&this.shop_list_current == val.shop_id){
        this.$notify({
          title: '',
          dangerouslyUseHTMLString: true,
          message: '<div class="notifyRealBox"><img class="notifyAvatar" src="'+val.avatar+'"><span class="tit">您有新客到...</span></div>',
          position: 'bottom-right',
          duration: 2000,  
          onClick:function(){   //触发路由跳转
            self.$router.push({name:"NotifyRealList"})
          }
        });
      }
    },//token失效时退出登录
    token:function(val){
        if(this.$route.path=="/loginpwd"){
          return false;
        }
        if(val==undefined){
          this.$alert('账号状态已变更，请重新登陆!!!', '提示', {
          confirmButtonText: '确定',
          callback: action => {
               this.$router.push({path:'/'})
          }
        });
        }
    }
  }
}
</script>
<style lang="scss">
@import 'assets/css/global.scss';
#app{
  width: 100%;
  height: 100%;
}
.notifyRealBox{
   width: 100%;
   position: relative;
    & .notifyAvatar{
    width: 100px;
    height: 100px;
    opacity: 1!important;
  }
  & .tit{
    display:block;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 2px;
    color: #f2f2f2;
    min-width:131px;
    position: absolute;
    right: -146px;
    top: 50%;
    transform: translate(0,-50%);
  }
}

</style>
