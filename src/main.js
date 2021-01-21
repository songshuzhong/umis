import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'requestidlecallback-polyfill';
import router from './router';
import App from './app.vue';

// import MisFactory, { MisSetting } from 'umis-factory';
import MisFactory from '../../umis-factory/src/entry';
import MisSetting from '../../umis-factory/src/components/setting';
import '../../umis-factory/src/assets/styles/index.scss';

import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);

app.config.productionTip = true;
app.config.devtools = true;

router.addRoute('UmisWebsite', {
  path: '/setting',
  component: MisSetting,
});

app
  .use(ElementPlus)
  .use(MisFactory, window.umisConfig)
  .use(router)
  .mount('#app');
