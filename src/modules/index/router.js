import Vue from 'vue';
import Router from 'vue-router';
import Loading from 'element-ui/lib/loading';

import Umis from '~modules/index/index.vue';

Vue.use(Router);

let routerMask;
const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Umis,
      meta: {
        title: 'UMIS',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  routerMask = Loading.service({
    fullscreen: true,
    customClass: 'umis-router-loading',
  });
  next();
});

router.afterEach((router, from) => {
  if (router.meta && router.meta.title) {
    document.title = router.meta.title;
  } else {
    document.title = 'Demo';
  }
  if (routerMask && typeof routerMask.close === 'function') {
    routerMask.close();
  }
});
export default router;
