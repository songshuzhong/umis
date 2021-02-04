import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import { ElLoading } from 'element-plus';
import MisSchema from '../../umis-factory/src/components/container/schema';
import frameSchema from './schema/frame';
import routerSchema from './schema/menu';
import errorSchema from './schema/error';
const history =
  process.env.NODE_ENV === 'development'
    ? createWebHistory()
    : createWebHashHistory();
let routerMask;

function createRoutes(routes, basename = '') {
  const result = [];
  const initRoute = item => {
    return {
      path: `${basename}/${item.name}`,
      component: MisSchema,
      props: {
        initSchema: {
          url: item.schemaUrl,
          method: 'get',
        },
      },
      meta: {
        title: item.title,
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
}

frameSchema[0].body[0].body.body = routerSchema.data.menu;

const routers = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'UmisWebsite',
      component: MisSchema,
      props: {
        schema: frameSchema,
        canSchemaUpdate: false,
      },
      children: createRoutes(routerSchema.data.menu),
    },
    {
      path: '/error',
      name: 'Error',
      component: MisSchema,
      props: {
        schema: errorSchema,
      },
      meta: {
        title: '错误',
      },
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: MisSchema,
      props: {
        schema: errorSchema,
      },
      meta: {
        title: '404',
      },
    },
  ],
});

routers.beforeEach((to, from, next) => {
  routerMask = ElLoading.service({
    fullscreen: true,
    customClass: 'umis-router-loading',
  });
  next();
});

routers.afterEach(router => {
  if (router.meta && router.meta.title) {
    document.title = router.meta.title;
  } else {
    document.title = 'UMIS';
  }
  if (routerMask && typeof routerMask.close === 'function') {
    routerMask.close();
  }
});

export default routers;
