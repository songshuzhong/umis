import { createRouter, createWebHistory } from 'vue-router';
// import MisSchema from '../../../umis-factory/src/components/container/schema';
import MisSetting from '../../../umis-factory/src/components/setting';
import frameSchema from '../schema/frame';
const Foo = {
  template: '<div>foo</div>',
};
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MisSetting,
    },
    {
      path: '/setting',
      name: 'UmisRouter',
      component: Foo,
      props: {
        schema: frameSchema,
        canSchemaUpdate: true,
      },
      children: [],
    },
  ],
});
