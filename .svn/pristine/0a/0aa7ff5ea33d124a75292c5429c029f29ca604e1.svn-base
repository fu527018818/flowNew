import Vue from 'vue';
import Router from 'vue-router';
// import store from 'store/index';
// import 'nprogress/nprogress.css'
// import NProgress from 'nprogress'

// 组件
import loginAccount from '../pages/LoginAccount.vue';
import loginPwd from '../pages/LoginPwd.vue';
import main from '../pages/Main.vue';
import user from '../pages/User.vue';
import personnel from '../pages/personnel.vue';
import orderDetail from '../pages/statistics/orderDetail.vue'
import software from '../pages/software.vue';
import dataEnter from '../pages/dataEnter.vue';
import userHelp from '../pages/userHelp.vue';
import userPortrayal from '../pages/userPortrayal.vue';
import userDetails from '../pages/userDetails.vue';
import userManage from '../pages/userManage.vue';
import statisticsTurnover  from '../pages/statistics/turnover.vue';
import statisticsFlow  from '../pages/statistics/passengerFlow.vue';
import statisticsIndent from '../pages/statistics/indent.vue';
import statisticsRefer from '../pages/statistics/refer.vue';
import statisticsAnalyze from '../pages/statistics/analyze.vue';
import analyzeHighLow from '../pages/statistics/analyze/analyzeHighLow.vue';
import flowRetention from '../pages/statistics/analyze/flowRetention.vue';
import effectiveness from '../pages/statistics/analyze/effectiveness.vue';
import clientStaff from '../pages/statistics/analyze/clientStaff.vue';
import forecast from '../pages/statistics/analyze/forecast.vue';
import timeFrame from  '../pages/statistics/analyze/timeFrame.vue';
import increase from '../pages/statistics/analyze/increase.vue';
import weekWeight from '../pages/statistics/analyze/weekWeight.vue';
import weekTendency from '../pages/statistics/analyze/weekTendency.vue';
import posHistory from '../pages/statistics/analyze/posHistory.vue';
import expenditures from '../pages/statistics/analyze/expenditures.vue';
import personnelAdmin from '../pages/personnel/personnelAdmin.vue';
import staffReview from '../pages/personnel/staffReview.vue';
import shopSet from '../pages/sets/set.vue';
import setNotice from '../pages/sets/setNotice.vue';
import editNotice from '../pages/sets/editNotice.vue';
import globalSearchUser from '../pages/search/globalSearchUser.vue';
import editInfo from '../pages/modifiedData/editInfo.vue';
import newsNotice from '../pages/news/newsNotice.vue';
import messageList from '../pages/messageNotification/messageList.vue';
import addShop from '../pages/meShop/addShop.vue';
import selectShop from '../pages/meShop/selectShop.vue';
import NotifyRealList from '../pages/notifyRealList/notifyRealList.vue';
Vue.use(Router)
/* 异步加载组件模块 */
const _import = require('./asynLoader');
/*常用路由表 */
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/loginAccount'
  },
  {
    path: '/loginAccount',
    name: 'loginAccount',
    component: loginAccount
  }, {
    path: '/loginpwd',
    name: "loginPwd",
    component: loginPwd
  }, {
    path: "/main",
    name: "main",
    component: main
  }, {
    path: "/userPortrayal",
    name: "userPortrayal",
    component: userPortrayal
  },
  {
    path: "/userManage",
    name: "userManage",
    component: userManage
  },
  {
    path: "/userDetails/:id",
    name: "userDetails",
    component: userDetails,
    children: [
      { path: "/userDetails/consume/:id", name: "userDetailsConsume", component: _import('components/user/userDetails/userDetailsConsume') },
      { path: "/userDetails/info/:id", name: "userDetailsInfo", component: _import('components/user/userDetails/userDetailsInfo') },
      { path: "/userDetails/portrait/:id", name: "userDetailsPortrait", component: _import('components/user/userDetails/userDetailsPortrait') },
      { path: "/userDetails/promotion/:id", name: "userDetailsPromotion", component: _import('components/user/userDetails/userDetailsPromotion') },
      { path: "/userDetails/serve/:id", name: "userDetailsServe", component: _import('components/user/userDetails/userDetailsServe') },
      { path: "/userDetails/detail/edit/:id", name: "userEdit", component: _import('components/user/userDetails/userEdit') },
    ]
  },
  {
    path: "/personnel",
    name: "personnel",
    component: personnel
  }, {
    path: "/statistics/orderDetail",
    name: "orderDetail",
    component: orderDetail
  },
  {
    path: "/statistics/turnover",
    name: "turnover",
    component: statisticsTurnover
  },
  {
    path: "/statistics/passengerFlow",
    name: "passengerFlow",
    component: statisticsFlow
  },
  {
    path: "/statistics/analyze",
    name: "statisticsAnalyze",
    component: statisticsAnalyze
  },
  {
    path: "/statistics/analyze/highLow",
    name: "analyzeHighLow",
    component: analyzeHighLow
  },
  {
    path: "/statistics/analyze/flowRetention",
    name: "flowRetention",
    component: flowRetention
  },
  {
    path: "/statistics/analyze/effectiveness",
    name: "effectiveness",
    component: effectiveness  
  },
  {
    path: "/statistics/analyze/clientStaff",
    name: "clientStaff",
    component: clientStaff  
  },
  {
    path: "/statistics/analyze/forecast",
    name: "forecast",
    component: forecast  
  },
  {
    path: "/statistics/analyze/timeFrame",
    name: "timeFrame",
    component: timeFrame  
  },{
    path: "/statistics/analyze/increase",
    name: "increase",
    component: increase 
  },
  {
    path: "/statistics/analyze/weekWeight",
    name: "weekWeight",
    component: weekWeight 
  },
  {
    path: "/statistics/analyze/weekTendency",
    name: "weekTendency",
    component: weekTendency 
  },
  {
    path: "/statistics/Indent",
    name: "statisticsIndent",
    component: statisticsIndent
  },
  {
    path: "/statistics/refer",
    name: "statisticsRefer",
    component: statisticsRefer
  },
  {
    path: "/statistics/posHistory",
    name: "posHistory",
    component:posHistory
  },
  {
    path: "/statistics/expenditures",
    name: "expenditures",
    component:expenditures
  },
  {
    path: "/personnel/staffReview",
    name: "staffReview",
    component:staffReview
  },
  {
    path: "/personnel/personnelAdmin",
    name: "personnelAdmin",
    component:personnelAdmin
  },
  {
    path: "/software",
    name: "software",
    component: software
  }, {
    path: "/dataEnter",
    name: "dataEnter",
    component: dataEnter,
    children:[
      { path: "/dataEnter/posBuy", name: "posBuy", component: _import('components/pos/posBuy') },
      { path: "/dataEnter/posEnter", name: "posEnter", component: _import('components/pos/posEnter') }
    ]
  },
  {
    path: '/userHelp',
    name: "userHelp",
    component: userHelp,
    children: [
      { path: "/helpSoftware", name: "helpSoftware", component: _import('components/userHelp/helpSoftware') },
      { path: "/helpDoc", name: "helpDoc", component: _import('components/userHelp/helpDoc') },
      { path: "/helpBrowser", name: "helpBrowser", component: _import('components/userHelp/helpBrowser') },
      { path: "/helpRelation", name: "helpRelation", component: _import('components/userHelp/helpRelation') }
    ]
  },
  {
    path: "/shopSet",
    name: "shopSet",
    component: shopSet,
    children: [
      { path: "/shop/set", name: "shopSetChild", component: _import('components/set/shopSet/shopSet') },
      { path: "/more/info", name: "moreInfo", component: _import('components/set/shopSet/moreInfo') }
    ]
  },{
    path: "/setNotice",
    name: "setNotice",
    component: setNotice,
    children:[
      { path: "/notice/new", name: "newNotice", component: _import('components/set/noticeAdmin/newNotice') },
      { path: "/notice/history", name: "historyNotice", component: _import('components/set/noticeAdmin/historyNotice') }

    ]
  },
  {
    path: "/editNotice",
    name: "editNotice",
    component: editNotice
  },
  {
    path: "/globalSearchUser",
    name: "globalSearchUser",
    component: globalSearchUser,
    children:[
      { path: "/search/user", name:"searchUser", component: _import('components/search/searchUser') },
      { path: "/search/order", name: "searchOrder", component: _import('components/search/searchOrder') }
    ]
  },
  {
    path: "/editInfo",
    name: "editInfo",
    component: editInfo,
    children:[
      { path: "/editInfo/editPersonal", name:"editPersonal", component: _import('components/modifiedData/editPersonal') },
      { path: "/editInfo/editPassword", name:"editPassword", component: _import('components/modifiedData/editPassword') }
    ]
  },
  {
    path: "/messageList",
    name: "messageList",
    component: messageList
  },
  {
    path: "/shop/selectShop",
    name: "selectShop",
    component: selectShop
  },
  {
    path: "/shop/addShop",
    name: "addShop",
    component: addShop
  },
  {
    path: "/notifyReal/list",
    name: "NotifyRealList",
    component: NotifyRealList
  }
]
const router = new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: constantRouterMap
})
export default router
