import Vue from 'vue';
import Notification from 'element-ui/lib/notification';
import message from 'element-ui/lib/message';

import router from '~modules/index/router';
import components from '~components/entry';

import api from '~utils/api';
import {
  getRenderedTpl,
  getCompiledUrl,
  onExpressionEval,
  json2FormData,
} from '~utils/tools';

import 'element-theme-chalk/lib/index.css';
import '~assets/styles/index.scss';

const umisConfig = window.umisConfig || {};

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.prototype.$eventHub = new Vue();
Vue.prototype.$onExpressionEval = onExpressionEval;
Vue.prototype.$getRenderedTpl = getRenderedTpl;
Vue.prototype.$getCompiledUrl = getCompiledUrl;
Vue.prototype.$json2FormData = json2FormData;
Vue.prototype.$notice = Notification;
Vue.prototype.$message = message;
Vue.prototype.$api = api(umisConfig);
Vue.prototype.$umisConfig = umisConfig;

Vue.use(components);

new Vue({
  router,
  render: h => h('router-view'),
}).$mount('#app');
