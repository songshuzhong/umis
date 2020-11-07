import Vue from 'vue';
import Notification from 'element-ui/lib/notification';

import router from '~modules/index/router';
import components from '~components/entry';

import api from '~utils/api';
import { getRenderedTpl, onExpressionEval } from '~utils/tools';

import 'element-theme-chalk/lib/index.css';
import '~assets/styles/index.scss';

const umisConfig = window.umisConfig || {};

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.prototype.$eventHub = new Vue();
Vue.prototype.$onExpressionEval = onExpressionEval;
Vue.prototype.$getRenderedTpl = getRenderedTpl;
Vue.prototype.$notice = Notification;
Vue.prototype.$api = api(umisConfig);
Vue.prototype.$umisConfig = umisConfig;

Vue.use(components);

new Vue({
  router,
  render: h => h('router-view'),
}).$mount('#app');
