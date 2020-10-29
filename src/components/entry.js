import MetaInfo from 'vue-meta-info';
import { Fragment } from 'vue-fragment';
import Loading from 'element-ui/lib/loading';

import MisPage from './umis/page.vue';
import MisAction from './umis/action.vue';
import MisField from './umis/field.vue';
import MisSelect from './umis/select.vue';
import MisCheckbox from './umis/checkbox.vue';
import MisRadio from './umis/radio.vue';
import MisButton from './umis/button.vue';
import MisForm from './umis/form.vue';
import MisLayout from './umis/layout.vue';
import MisMain from './umis/main.vue';
import MisFooter from './umis/footer.vue';
import MisAside from './umis/aside.vue';
import MisTree from './umis/tree.vue';
import MisMenu from './umis/menu.vue';
import MisSubmenu from './umis/menu-submenu.vue';
import MisMenuItem from './umis/menu-item.vue';
import MisMenuItemGroup from './umis/menu-item-group.vue';
import MisHeader from './umis/header.vue';
import MisGrid from './umis/grid.vue';
import MisCards from './umis/cards.vue';
import MisAvatar from './umis/avatar.vue';
import MisHtml from './umis/html.vue';
import MisAlert from './umis/alert.vue';
import MisDialog from './umis/dialog.vue';
import MisDrawer from './umis/drawer.vue';

import MisSwitch from 'element-ui/lib/switch';
import MisLink from './umis/link.vue';
import MisInput from 'element-ui/lib/input';
import MisContainer from 'element-ui/lib/container';
import MisDatepicker from 'element-ui/lib/date-picker';

const components = {
  Fragment,
  MisPage,
  MisAction,
  MisGrid,
  MisCards,
  MisAvatar,
  MisDialog,
  MisDrawer,
  MisLink,
  MisAlert,
  MisHtml,
  MisContainer,
  MisHeader,
  MisAside,
  MisMain,
  MisFooter,
  MisLayout,
  MisField,
  MisSelect,
  MisCheckbox,
  MisRadio,
  MisSwitch,
  MisForm,
  MisButton,
  MisDatepicker,
  MisTree,
  MisMenu,
  MisSubmenu,
  MisMenuItem,
  MisMenuItemGroup,
  MisInput,
};

const componentsName = Object.keys(components);

export default {
  install(Vue) {
    componentsName.forEach(i => Vue.component(i, components[i]));

    Vue.use(Loading);
    Vue.use(MetaInfo);
  },
};
