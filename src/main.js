import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'requestidlecallback-polyfill';
import router from './router/index';
import App from './app.vue';

import MisFactory from '../../umis-factory/src/entry';
import MisSetting from '../../umis-factory/src/components/setting';
import '../../umis-factory/src/assets/styles/index.scss';
import '../src/assets/styles/index.scss';
import 'element-plus/lib/theme-chalk/index.css';
import * as exComponents from './components/index';

const app = createApp(App);
const umisOption = {
  ...window.umisConfig,
  components: exComponents,
};

app.config.productionTip = true;
app.config.devtools = true;
app.config.silent = true;

router.addRoute('UmisWebsite', {
  path: '/setting',
  component: MisSetting,
});

app
  .use(ElementPlus)
  .use(MisFactory, umisOption)
  .use(router)
  .mount('#app');
