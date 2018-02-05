import * as types from '../../mutation-types';
import  {userDetail} from '../../../api/global';
const state={
    currentInfo:""
}
const getters={
      
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
    }
}   
const mutations={
      [types.SET_USER_CURRENT_INFO](state,data){
          state.currentInfo = data;
      }
}
export default{
    state,
    getters,
    actions,
    mutations
}
