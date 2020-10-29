import MetaInfo from 'vue-meta-info';
import { Fragment } from 'vue-fragment';
import { Loading } from 'element-ui';

import MisPage from '~components/umis/page';
import MisAction from '~components/umis/action';
import MisField from '~components/umis/field';
import MisSelect from '~components/umis/select';
import MisCheckbox from '~components/umis/checkbox';
import MisRadio from '~components/umis/radio';
import MisButton from '~components/umis/button';
import MisForm from '~components/umis/form';
import MisLayout from '~components/umis/layout';
import MisMain from '~components/umis/main';
import MisFooter from '~components/umis/footer';
import MisAside from '~components/umis/aside';
import MisTree from '~components/umis/tree';
import MisMenu from '~components/umis/menu';
import MisSubmenu from '~components/umis/menu-submenu';
import MisMenuItem from '~components/umis/menu-item';
import MisMenuItemGroup from '~components/umis/menu-item-group';
import MisHeader from '~components/umis/header';
import MisGrid from '~components/umis/grid';
import MisCards from '~components/umis/cards';
import MisAvatar from '~components/umis/avatar';
import MisHtml from '~components/umis/html';
import MisAlert from '~components/umis/alert';
import MisDialog from '~components/umis/dialog';
import MisDrawer from '~components/umis/drawer';
import MisMonaco from '~components/umis/monaco';
import MisImage from '~components/umis/image';
import MisTabs from '~components/umis/tabs';
import MisLink from '~components/umis/link';
import MisDomain from '~components/umis/api';
import MisComponent from '~components/umis/component';

import MisSwitch from 'element-ui/lib/switch';
import MisInput from 'element-ui/lib/input';
import MisContainer from 'element-ui/lib/container';
import MisDatepicker from 'element-ui/lib/date-picker';

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
  MisDomain,
};

const componentsName = Object.keys(components);

export default {
  install(Vue) {
    componentsName.forEach(i => Vue.component(i, components[i]));

    Vue.use(Loading);
    Vue.use(MetaInfo);
  },
};
