import * as types from '../../mutation-types';
import  {userManager,statisticsIndent} from '../../../api/global';
const state={
    userSearch:"",
    indentSearch:""
}
const getters={

}
const actions={
    globalSearchUser({commit},json){
        return new Promise((resolve,reject)=>{
            userManager(json).then(res=>{
                commit('GET_SEARCH_USER',res.data.data)
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
        })
    },
    globalSeachIndent({commit},json){
        return new Promise((resolve,reject)=>{
            statisticsIndent(json).then(res=>{
                commit('GET_SEARCH_INDENT',res.data.data)
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
}   
const mutations={
    [types.GET_SEARCH_USER](state,json){
        state.userSearch= json
    },
    [types.GET_SEARCH_INDENT](state,json){
        state.indentSearch = json
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}