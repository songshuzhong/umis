import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import { ElLoading } from 'element-plus';
import menuCreator from './creator';
import MisSchema from '../../../umis-factory/src/components/container/schema';
import frameSchema from './../schema/frame';
import routerSchema from './../schema/menu';
import errorSchema from './../schema/error';

const history =
  process.env.NODE_ENV === 'development'
    ? createWebHistory()
    : createWebHashHistory();
let routerMask;

const menus = menuCreator
  .dynamicMenuCreator(routerSchema.data.menu)
  .initDocMenu()
  .docMenuCreator().menus;

frameSchema.body[0].body.body = routerSchema.data.menu;

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
        iProtal: true,
      },
      children: menus,
    },
    {
      path: '/preview',
      name: 'UmisPreview',
      component: MisSchema,
      props: true,
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
