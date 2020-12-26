import Vue from 'vue';
import ElementUI from 'element-ui';

import dynamicRouter from '~modules/index/router';
import UmisFactory from '../../../umis-factory/src/entry';
import '../../../umis-factory/src/assets/styles/index.scss';
import '~assets/styles/index.scss';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(ElementUI);
Vue.use(UmisFactory, window.umisConfig);

Vue.prototype.$api
  .slientApi()
  .get('/api/menu')
  .then(({data}) => {
    const router = dynamicRouter(data);
    new Vue({
      router,
      render: h => h('router-view'),
    }).$mount('#app');
  }).catch(err => {
    console.error(err)
});
