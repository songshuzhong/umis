import Vue from 'vue';
import ElementUI from 'element-ui'

import router from '~modules/index/router';
import UmisFactory from 'umis-factory';

import 'umis-factory/dist/css/index.css';
import '~assets/styles/index.scss';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(ElementUI);
Vue.use(UmisFactory, window.umisConfig);

new Vue({
  router,
  render: h => h('router-view'),
}).$mount('#app');
