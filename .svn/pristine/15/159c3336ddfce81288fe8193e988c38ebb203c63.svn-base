import * as types from '../mutation-types'
const state = {
   newMessage:''
}
// 登录socket login 在 MainNav组件中
const mutations={
  [types.SOCKET_NEW_GUEST](state,newMessage){
         state.newMessage = newMessage
  }
}
const actions={
   socket_new_guest({commit},newMessage){
         commit('SOCKET_NEW_GUEST',newMessage)
   }
}
const getters={

}
export default{
    state,
    mutations,
    actions,
    getters
}