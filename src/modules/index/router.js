import Vue from 'vue';
import Router from 'vue-router';
import Loading from 'element-ui/lib/loading';

import Umis from '~modules/index/index.vue';

Vue.use(Router);

let routerMask;
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Umis,
      meta: {
        title: 'UMIS',
      },
      children: [
        {
          path: '/doc',
          component: () => import('./doc'),
        },
        {
          path: '/visible',
          component: () => import('~components/umis/page'),
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
          path: '/reactive',
          component: () => import('~components/umis/page'),
          props: {
            initSchema: {
              url: '/api/schema/reactive',
              method: 'get',
            },
          },
          meta: {
            title: '联动',
          },
        },
        {
          path: '/grid',
          component: () => import('~components/umis/page'),
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
          component: () => import('~components/umis/page'),
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
          path: '/cards',
          component: () => import('~components/umis/page'),
          props: {
            initSchema: {
              url: '/api/schema/cards',
              method: 'get',
            },
          },
          meta: {
            title: '卡片',
          },
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
