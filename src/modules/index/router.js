import Vue from 'vue';
import VueRouter from 'vue-router';
import Loading from 'element-ui/lib/loading';

import Page from '~components/umis/container/page';
import Umis from '~modules/index/index.vue';

Vue.use(VueRouter);

let routerMask;
const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Umis,
      meta: {
        title: 'UMIS',
      },
      children: [
        {
          path: '/visible',
          component: Page,
          props: {
            initSchema: {
              url: '/api/schema/visible',
              method: 'get',
            },
          },
          meta: {
            title: '显隐',
          },
        },
        {
          path: '/grid',
          component: Page,
          props: {
            initSchema: {
              url: '/api/schema/grid',
              method: 'get',
            },
          },
          meta: {
            title: '栅栏',
          },
        },
        {
          path: '/validator',
          component: Page,
          props: {
            initSchema: {
              url: '/api/schema/validator',
              method: 'get',
            },
          },
          meta: {
            title: '验证',
          },
        },
        {
          path: '/tabs',
          component: Page,
          props: {
            initSchema: {
              url: '/api/schema/tabs',
              method: 'get',
            },
          },
          meta: {
            title: '选项卡',
          },
        },
        {
          path: '/linkage',
          component: Page,
          props: {
            initSchema: {
              url: '/api/schema/linkage',
              method: 'get',
            },
          },
          meta: {
            title: ' 联动',
          },
        },
        {
          path: '/setting',
          component: () => import('~components/umis/setting'),
        },
      ],
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
