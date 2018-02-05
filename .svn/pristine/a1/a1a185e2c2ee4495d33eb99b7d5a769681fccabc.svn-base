import * as types from '../../mutation-types';
import  {userDetail} from '../../../api/global';
const state={
    currentInfo:"",
    userPageList:null //当前搜索出来的用户列表
}
const getters={
    userPageList:state => state.userPageList||ls.get('userPageList')
}
const actions={
    userDetailInit({commit},json){
        return new Promise((resolve,reject)=>{
            userDetail(json).then(res=>{
                if(res.status ==200){
                    commit('SET_USER_CURRENT_INFO',res.data.data)
                }
                resolve(res)
            })
            .catch(error=>{
                reject(error) 
            })
        })
    },
    setUserList({commit},data){
        ls.set('userPageList',data);
        commit('SET_USER_LIST',data);
    }
}   
const mutations={
      [types.SET_USER_CURRENT_INFO](state,data){
          state.currentInfo = data;
      },
      [types.SET_USER_LIST](state,data){
        state.userPageList = data;
      }
}
export default{
    state,
    getters,
    actions,
    mutations
}
