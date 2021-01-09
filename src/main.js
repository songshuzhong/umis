import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import router from './router';
import App from './app.vue';
import UmisFactory from '../../umis-factory/src/entry';
import MisSchema from '../../umis-factory/src/components/container/schema';
import './assets/styles/index.scss';

const app = createApp(App);

app.use(ElementPlus);
app.use(UmisFactory, window.umisConfig);
app.use(router);
app.config.productionTip = true;
app.config.devtools = true;
app.config.globalProperties.$api
  .slientApi(app.config.globalProperties.$umisConfig)
  .get(
    'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/menu/0767bea4-c7e7-4aa7-a1b5-2fd5e1ec4a7f'
  )
  .then(({ data: { menu } }) => {
    createRoutes(menu).forEach(item => {
      router.addRoute('UmisRouter', item);
    });
    app.mount('#app');
  })
  .catch(err => console.error(err));

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
