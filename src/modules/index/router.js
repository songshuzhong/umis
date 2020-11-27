import Vue from 'vue';
import VueRouter from 'vue-router';
import { Loading } from 'element-ui';
// import { MisPage, MisSetting } from 'umis-factory';
import MisPage from '../../../../umis-factory/src/components/container/page';
import MisSetting from '../../../../umis-factory/src/components/setting/index';
import Umis from '~modules/index/index.vue';
import routerSchema from '../../schema/router';
import frameSchema from '../../schema/frame';

Vue.use(VueRouter);

let routerMask;
const routerMenu = [
  {
    path: '/doc',
    component: () => import('./doc.vue'),
  },
  {
    path: '/setting',
    component: MisSetting,
  },
];
const createRoute = item => {
  return {
    path: item.name,
    component: MisPage,
    props: {
      initSchema: {
        url: item.schemaUrl,
        method: 'get',
        params: {
          id: item.pageId,
        },
      },
    },
    meta: {
      title: item.label,
    },
  };
};
const createRoutes = routes => {
  routes.forEach(menu => {
    if (menu.renderer === 'mis-menu-submenu') {
      menu.body.forEach(submenu => {
        if (submenu.renderer === 'mis-menu-item-group') {
          submenu.body.forEach(group => {
            if (group.renderer === 'mis-menu-item' && group.schemaUrl) {
              const route = createRoute(group);
              routerMenu.unshift(route);
            } else if (
              submenu.renderer === 'mis-menu-item' &&
              submenu.schemaUrl
            ) {
              const route = createRoute(submenu);
              routerMenu.unshift(route);
            }
          });
        } else if (submenu.renderer === 'mis-menu-item' && submenu.schemaUrl) {
          const route = createRoute(submenu);
          routerMenu.unshift(route);
        }
      });
    } else if (menu.renderer === 'mis-menu-item' && menu.schemaUrl) {
      const route = createRoute(menu);
      routerMenu.unshift(route);
    }
  });
};

frameSchema[0].body[0].body = window.initData.concat(
  frameSchema[0].body[0].body
);
frameSchema[0].body[0].body = routerSchema.concat(frameSchema[0].body[0].body);
createRoutes(window.initData);
createRoutes(routerSchema);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Umis,
      props: {
        schema: frameSchema,
        canSchemaUpdate: false,
      },
      meta: {
        title: 'UMIS',
      },
      children: routerMenu,
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
