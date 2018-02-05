import Vue from 'vue'
import Vuex from 'vuex'
import  login from './modules/login/login'
import  main from './modules/main/main'
import user  from './modules/user/user'
import set from './modules/set/set'
import search from './modules/search/search'
import websocket from './modules/websocket'
import * as types from './mutation-types'
import getDate from '../assets/js/dateSelect'
import {notificationStatus} from '../api/global'
Vue.use(Vuex);
const state = {
    shop_list_current:"",
    notifyStatus:"0"
}
const getters={
        token:state=>state.login.token||ls.get('token'),
        userInfo: state => state.login.userInfo||ls.get('userInfo'),
        secret:state => state.login.secret||ls.get('secret'),
        shop_list:state => state.login.shop_list||ls.get('shop_list'),
        shop_list_current:state => state.shop_list_current||ls.get('shop_list_current')
}

 const mutations={
    [types.CUT_SHOP_LIST_CURRENT](states,shop_id){
        if(ls.get('shop_list_current')){
            states.shop_list_current = shop_id
            ls.set('shop_list_current',shop_id)
        }else{
            states.shop_list_current = states.login.shop_list[0]
            ls.set('shop_list_current',shop_id)
        }
         
    },
    [types.GET_NOTIFY_STATUS](states,data){
        states.notifyStatus = data*1
    }
}
const actions ={
    cut_shop_list_current:({commit},shop_id)=>{
        commit('CUT_SHOP_LIST_CURRENT',shop_id)
    },  /*切换时间 如 今天 昨天 近期切换*/
    cut_date:({commit},val)=>{
        return new Promise((resolve,reject)=>{
            switch(val){
                case 'today':
                    resolve(getDate.getToday())
                break;
                case 'yesterday':
                    resolve(getDate.getYesterdayDate())
                break;
                case 'recent':
                    resolve(getDate.getRecentDate())
                break;
                case 'thisWeek':
                     resolve(getDate.getWeekDate())
                break;
                case 'thisMonth':
                    resolve(getDate.getMonthDate())
                break;
            }
        })
    },
    getNotificationStatus({commit},data){
        return new Promise((resolve,reject)=>{
            notificationStatus(data)
            .then(res=>{
                commit('GET_NOTIFY_STATUS',res.data.data.count)
                resolve(res)
            })
        })
    }
    
}
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules:{
        login,
        main,
        websocket,
        user,
        set,
        search
    }
})