// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'static/reset.scss';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import router from './router/index';
import './router/routerPolling';
import store from './store/index';
import ElementUI from 'element-ui';
import JsEncrypt from 'jsencrypt/bin/jsencrypt';
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import storeSocket from './store';
import constantRouterMap from './router/index'
import 'jquery-slimscroll';
import 'vue-video-player/src/custom-theme.css';
import 'video.js/dist/video-js.css';
import VideoPlayer from 'vue-video-player';
import 'videojs-flash'
import 'video.js/dist/video-js.css';
import 'videojs-contrib-hls.js/dist/videojs-contrib-hlsjs.min.js';


//载入全局过滤器
import { install as Filter } from './filter'
Vue.use(VideoPlayer);
Vue.use(Filter);

Vue.config.productionTip = false;
Vue.use(VueSocketio, socketio('http://182.61.32.66:2323'), storeSocket);
Vue.prototype.$jsEncrypt = JsEncrypt;
Vue.use(ElementUI);
Vue.use(Vuex);
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  sockets:{
    connecting:function(){
      console.log('正在连接')
    },
    connect: function(){
      console.log('连接成功');
    },
    disconnect:function(){
      console.log('与服务器连接断开')
    },
    update_online_count(value){
      console.log(value)
    },
    new_guest(msg){
        this.$store.dispatch('socket_new_guest',msg);
    }
  }
})
