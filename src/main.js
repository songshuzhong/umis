import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import router from './router';
import App from './app.vue';
import UmisFactory from '../../umis-factory/src/entry';
import './assets/styles/index.scss';
import '../../umis-factory/src/assets/styles/index.scss';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);

app.config.productionTip = true;
app.config.devtools = true;

app
  .use(ElementPlus)
  .use(UmisFactory, window.umisConfig)
  .use(router)
  .mount('#app');
