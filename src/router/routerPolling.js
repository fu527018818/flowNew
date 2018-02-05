import router from './index'
import store from 'store/index';
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

/* 页面加载进度条配置 */
NProgress.configure({ easing: 'ease', speed: 500, minimum: 0.1, showSpinner: false });
// 路由配置 start
router.beforeEach((to, from, next) => {
  NProgress.start();
  var token = ls.get('token');
  var userInfo = ls.get('userInfo');
  var userId = ls.get('userId');
  var arr = [',',"/loginAccount", "/loginpwd"];
  /**判断路由跳转区分登录和进入内容页面*/
  if (arr.indexOf(to.path) >= 0) {
    if (to.path.indexOf("/loginAccount")>= 0 && userInfo && userId) {
          next({ path: '/loginpwd' });
          NProgress.done();
      return
    }
   else if(to.path.indexOf('/loginpwd')>=0&&!userInfo&&!userId){
      next({ path: '/loginAccount' });
      NProgress.done();
    }
    next()
    return
  }
  else if (token&&token.length>0) {
        next()
   }else{
    if (userInfo && userId&&!ls.get('shop_list')) {
          next({ path: '/loginpwd' });
          NProgress.done();
        return 
    } else {
          next('/loginAccount');
          NProgress.done();
    }
    next();
  }
});
router.afterEach(route => {
 NProgress.done();
})