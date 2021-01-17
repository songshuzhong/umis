import { createRouter, createWebHistory } from 'vue-router';
import MisSchema from '../../umis-factory/src/components/container/schema';
import frameSchema from './schema/frame';
import routerSchema from './schema/menu';

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
}

frameSchema[0].body[0].body = routerSchema.data.menu;

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'UmisRouter',
      component: MisSchema,
      props: {
        schema: frameSchema,
        canSchemaUpdate: true,
      },
      children: createRoutes(routerSchema.data.menu),
    },
    {
      path: '/doc',
      component: () => import('./doc'),
    },
  ],
});
