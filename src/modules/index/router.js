import Vue from 'vue';
import VueRouter from 'vue-router';
import { Loading } from 'element-ui';
import MisSchema from '../../../../umis-factory/src/components/container/schema';
import MisSetting from '../../../../umis-factory/src/components/setting/index';
import frameSchema from '../../schema/frame';
import customSchema from '../../schema/custom';

Vue.use(VueRouter);

let routerMask;
const suffixRoute = [
  {
    path: '/doc',
    component: () => import('./doc.vue'),
  },
  {
    path: '/setting',
    component: MisSetting,
  },
];
const createRoutes = (routes, basename = '') => {
  const result = [];
  const initRoute = item => {
    return {
      path: `${basename}/${item.name}`,
      component: MisSchema,
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
  routes.forEach(menu => {
    if (menu.renderer === 'mis-menu-submenu') {
      menu.body.forEach(submenu => {
        if (submenu.renderer === 'mis-menu-item-group') {
          submenu.body.forEach(group => {
            if (group.renderer === 'mis-menu-item' && group.schemaUrl) {
              const route = initRoute(group);
              result.unshift(route);
            } else if (
              submenu.renderer === 'mis-menu-item' &&
              submenu.schemaUrl
            ) {
              const route = initRoute(submenu);
              result.unshift(route);
            }
          });
        } else if (submenu.renderer === 'mis-menu-item' && submenu.schemaUrl) {
          const route = initRoute(submenu);
          result.unshift(route);
        }
      });
    } else if (menu.renderer === 'mis-menu-item' && menu.schemaUrl) {
      const route = initRoute(menu);
      result.unshift(route);
    }
  });

  return result;
};
const createFrame = routes => {
  frameSchema[0].body[0].body = routes.concat(frameSchema[0].body[0].body);
};

const dynamicRouter = routes => {
  let routeMenu = createRoutes(routes);
  const pages = createRoutes(routes, '/page');
  createFrame(routes);
  routeMenu = routeMenu.concat(suffixRoute);
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: MisSchema,
        props: {
          schema: frameSchema,
          canSchemaUpdate: false,
        },
        meta: {
          title: 'UMIS',
        },
        children: routeMenu,
      },
      ...pages,
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
      document.title = 'UMIS';
    }
    if (routerMask && typeof routerMask.close === 'function') {
      routerMask.close();
    }
  });

  return router;
};

export default dynamicRouter;
