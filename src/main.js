import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import router from './router';
// import App from './app.vue';
import UmisFactory from '../../umis-factory/src/entry';
import MisSetting from '../../umis-factory/src/components/setting';

import './assets/styles/index.scss';
import '../../umis-factory/src/assets/styles/index.scss';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp({});

app.config.productionTip = true;
app.config.devtools = true;

router.addRoute('UmisRouter', {
  path: '/setting',
  component: MisSetting,
});

app
  .use(ElementPlus)
  .use(UmisFactory, window.umisConfig)
  .use(router)
  .mount('#app');
