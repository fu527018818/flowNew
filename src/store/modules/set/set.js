import * as types from '../../mutation-types';
import  {getSetShopInfo,noticeList} from '../../../api/global';
const state={
    shopInfo:"",
    noticeAllList:""
}
const getters={

}
const actions={
    getShopInfo({commit},json){
        return new Promise((resolve,reject)=>{
            getSetShopInfo(json).then(res=>{
                if(res.data.status==200){
                    commit('GET_SET_SHOPINFO',res.data.data);
                    resolve(res)
                }
            })
            .catch(error=>{
                reject(error)
            })
        })
    },
    getNoticeList({commit},json){
        return new Promise((resolve,reject)=>{
            noticeList(json).then(res=>{
                if(res.data.status==200){
                    commit('GET_NOTICE_ALLLIST',res.data.data);
                    resolve(res)
                }
            })
            .catch(error=>{
                reject(error)
            })
        })
    }
}   
const mutations={
    [types.GET_SET_SHOPINFO](state,data){
        state.shopInfo = data
    },
    [types.GET_NOTICE_ALLLIST](state,data){
        state.noticeAllList = data
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}