import Vue from 'vue';
import notification from 'element-ui/lib/notification';

import router from '~modules/index/router';
import components from '~components/entry';

import api from '~utils/api';
import { request } from '~utils/http';
import { getRenderedTpl, onExpressionEval } from '~utils/tools';

import 'element-theme-chalk/lib/index.css';
import '~assets/styles/index.scss';

Vue.config.productionTip = false;

Vue.prototype.$eventHub = new Vue();
Vue.prototype.$notice = notification;
Vue.prototype.$http = request;
Vue.prototype.$api = api;
Vue.prototype.$onExpressionEval = onExpressionEval;
Vue.prototype.$getRenderedTpl = getRenderedTpl;

Vue.use(components);

new Vue({
  router,
  render: h => h('router-view'),
}).$mount('#app');
