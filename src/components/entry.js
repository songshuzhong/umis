import MetaInfo from 'vue-meta-info';
import { Fragment } from 'vue-fragment';
import ElLoading from 'element-ui/lib/loading';

import MisContainer from 'element-ui/lib/container';
import MisPage from '~components/umis/container/page';
import MisLayout from '~components/umis/container/layout';
import MisGrid from '~components/umis/container/grid';
import MisMain from '~components/umis/container/main';
import MisAside from '~components/umis/container/aside';
import MisHeader from '~components/umis/container/header';
import MisFooter from '~components/umis/container/footer';
import MisTabs from '~components/umis/container/tabs';

import MisSwitch from 'element-ui/lib/switch';
import MisInput from 'element-ui/lib/input';
import MisDatepicker from 'element-ui/lib/date-picker';
import MisAction from '~components/umis/action';
import MisField from '~components/umis/form/field';
import MisSelect from '~components/umis/form/select';
import MisCheckbox from '~components/umis/form/checkbox';
import MisRadio from '~components/umis/form/radio';
import MisButton from '~components/umis/form/button';
import MisCombo from '~components/umis/form/combo';
import MisForm from '~components/umis/form/index';

import MisTree from '~components/umis/tree';
import MisMenu from '~components/umis/menu';
import MisSubmenu from '~components/umis/menu-submenu';
import MisMenuItem from '~components/umis/menu-item';
import MisMenuItemGroup from '~components/umis/menu-item-group';

import MisAlert from '~components/umis/popup/alert';
import MisDialog from '~components/umis/popup/dialog';
import MisDrawer from '~components/umis/popup/drawer';

import MisCards from '~components/umis/cards';
import MisAvatar from '~components/umis/avatar';
import MisHtml from '~components/umis/html';

import MisMonaco from '~components/umis/monaco';
import MisImage from '~components/umis/image';
import MisLink from '~components/umis/link';
import MisComponent from '~components/umis/component';

const components = {
  Fragment,
  MisComponent,
  MisPage,
  MisAction,
  MisGrid,
  MisCards,
  MisAvatar,
  MisDialog,
  MisMonaco,
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
  MisCombo,
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
  MisImage,
  MisTabs,
};

const componentsName = Object.keys(components);

export default {
  install(Vue) {
    componentsName.forEach(i => Vue.component(i, components[i]));

    Vue.use(ElLoading);
    Vue.use(MetaInfo);
  },
};
