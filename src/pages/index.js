import Vue from 'vue';
import ElLoading from 'element-ui/lib/loading';
import Notification from 'element-ui/lib/notification';
import message from 'element-ui/lib/message';
import { Fragment } from 'vue-fragment';

import router from '~modules/index/router';
import '~components/entry';

import api from '~utils/api';
import {
  getRenderedTpl,
  getCompiledUrl,
  getCompiledParams,
  onExpressionEval,
  json2FormData,
  saveInitStyle,
  saveInitFormType,
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
Vue.prototype.$getCompiledParams = getCompiledParams;
Vue.prototype.$json2FormData = json2FormData;
Vue.prototype.$saveInitStyle = saveInitStyle;
Vue.prototype.$saveInitFormType = saveInitFormType;
Vue.prototype.$notice = Notification;
Vue.prototype.$message = message;
Vue.prototype.$api = api(umisConfig);
Vue.prototype.$umisConfig = umisConfig;

Vue.component(Fragment);
Vue.use(ElLoading);

new Vue({
  router,
  mounted() {
    const ctx = this;
    this.$saveInitStyle(ctx, umisConfig.style);
    this.$saveInitFormType(ctx, umisConfig.isFormData);
  },
  render: h => h('router-view'),
}).$mount('#app');
