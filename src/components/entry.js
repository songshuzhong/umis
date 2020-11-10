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
import MisService from '~components/umis/container/service';
import MisComponent from '~components/umis/container/component';

import MisSwitch from 'element-ui/lib/switch';
import MisInput from 'element-ui/lib/input';
import MisDatepicker from 'element-ui/lib/date-picker';
import MisAction from '~components/umis/action';
import MisDropdown from '~components/umis/dropdown';
import MisField from '~components/umis/form/field';
import MisSelect from '~components/umis/form/select';
import MisCheckbox from '~components/umis/form/checkbox';
import MisRadio from '~components/umis/form/radio';
import MisButton from '~components/umis/form/button';
import MisCombo from '~components/umis/form/combo';
import MisForm from '~components/umis/form/index';
import MisUpload from '~components/umis/form/upload';

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
import MisTable from '~components/umis/table';

import MisSetting from '~components/umis/setting';

const components = {
  Fragment,
  MisContainer,
  MisPage,
  MisLayout,
  MisGrid,
  MisMain,
  MisAside,
  MisHeader,
  MisFooter,
  MisTabs,
  MisService,
  MisComponent,
  MisSwitch,
  MisInput,
  MisDatepicker,
  MisForm,
  MisAction,
  MisDropdown,
  MisField,
  MisSelect,
  MisCheckbox,
  MisRadio,
  MisButton,
  MisCombo,
  MisUpload,
  MisTree,
  MisMenu,
  MisSubmenu,
  MisMenuItemGroup,
  MisMenuItem,
  MisAlert,
  MisDialog,
  MisDrawer,
  MisCards,
  MisAvatar,
  MisHtml,
  MisMonaco,
  MisImage,
  MisLink,
  MisTable,
  MisSetting,
};

const componentsName = Object.keys(components);

export default {
  install(Vue) {
    componentsName.forEach(i => Vue.component(i, components[i]));

    Vue.use(ElLoading);
    Vue.use(MetaInfo);
  },
};
