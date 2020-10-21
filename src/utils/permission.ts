import router from "@/router";
import store from "@/store";
// import { Notify } from "vant";
// import { getToken } from "@/utils/auth"; // get token from cookie
// import getPageTitle from "@/utils/get-page-title";

const whiteList = ["/login", "/register"]; // 白名单列表

router.beforeEach(async (to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title;
  const hasToken = 1===1;
  if (hasToken) {
    if (to.path === "/login") {
      // 已经登录，跳转到首页
      next();
    } else {
      // 获取用户信息
      const hasGetUserInfo =
        store.getters.userData && store.getters.userData.name;
      //   console.log(hasGetUserInfo);
      if (hasGetUserInfo) {
        next();
      } else {
        try {
          // get user info
          // await store.dispatch('user/getInfo')
          next();
        } catch (error) {
          // 清除用户信息，退出登录，跳转登录页
          store.commit("user/LOGOUT");

          next(`/login?redirect=${to.path}`);
        }
      }
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1) {
      // 白名单中，无需验证
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
    }
  }
});
