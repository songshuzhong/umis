import Vue, { createApp } from 'vue'
import App from './App.vue'

import { Notification } from 'element-ui';

import router from './router';
import components from './components/entry';

import api from './utils/api';
import { request } from './utils/http';
import { getRenderedTpl, onExpressionEval } from './utils/tools';

import 'element-theme-chalk/lib/index.css';
import './assets/styles/index.scss';

const application = createApp(App);

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.prototype.$eventHub = new Vue();
Vue.prototype.$notice = Notification;
Vue.prototype.$http = request;
Vue.prototype.$api = api;
Vue.prototype.$onExpressionEval = onExpressionEval;
Vue.prototype.$getRenderedTpl = getRenderedTpl;

Vue.use(components);

application.use(router);

application.mount('#app');
