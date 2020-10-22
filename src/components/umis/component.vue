<template>
  <fragment>
    <template v-if="showErrorBoundary">
      <el-alert title="错误: 渲染失败了" type="error">
        <pre class="umis-component__not-find">
          <code>
{{`{
    "mis-name": "${misName}"
    "path": "${path}"
    "error": "${error}"
}`}}
          </code>
        </pre>
      </el-alert>
    </template>
    <template v-else>
      <component
        :is="misName"
        :name="name"
        :index="index"
        :path="path"
        :header="header"
        :body="body"
        :footer="footer"
        :store="store"
        :visible="iVisible"
        :action="action"
        :after-action="afterAction"
        v-bind="props"
      />
    </template>
  </fragment>
</template>
<script>
import { Alert } from 'element-ui';
import derivedProp from '~components/mixin/derivedProp';

const components = [
  'mis-page',
  'mis-action',
  'mis-grid',
  'mis-cards',
  'mis-avatar',
  'mis-dialog',
  'mis-drawer',
  'mis-link',
  'mis-alert',
  'mis-html',
  'mis-container',
  'mis-header',
  'mis-aside',
  'mis-main',
  'mis-footer',
  'mis-layout',
  'mis-field',
  'mis-select',
  'mis-checkbox',
  'mis-radio',
  'mis-switch',
  'mis-form',
  'mis-button',
  'mis-datepicker',
  'mis-tree',
  'mis-menu',
  'mis-submenu',
  'mis-menu-item',
  'mis-menu-item-group',
  'mis-input',
  'mis-image',
  'mis-tabs',
  'mis-domain',
  'mis-monaco',
];
export default {
  name: 'mis-Component',
  components: {
    ElAlert: Alert,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    misName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    index: {
      type: String,
      required: false,
    },
    header: {
      type: [Array, Object],
      required: false,
    },
    body: {
      type: [Array, Object],
      required: false,
    },
    footer: {
      type: [Array, Object],
      required: false,
    },
    store: {
      type: Object,
      required: false,
    },
    props: {
      type: Object,
      required: false,
    },
    visible: {
      type: Boolean,
      required: false,
    },
    data: {
      type: [Array, Object],
      required: false,
    },
    action: {
      type: Function,
      required: false,
    },
    afterAction: {
      type: Function,
      required: false,
    },
  },
  mixins: [derivedProp],
  data() {
    return {
      error: '',
      components,
    };
  },
  errorCaptured(err, vm, info) {
    this.error = `'${err.message}' is found in ${info} of component`;

    return false;
  },
  computed: {
    showErrorBoundary() {
      if (!this.components.includes(this.misName)) {
        this.error = '找不到对应的渲染器';
        return true;
      } else if (this.error) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang="scss">
.el-alert__content {
  width: 100%;
}
.umis-component__not-find {
  width: 100%;
  background-color: white;
  font-size: 14px;
  color: #606266;
}
</style>
