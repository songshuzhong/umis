<template>
  <el-drawer
    :appendToBody="appendToBody"
    :closeOnPressEscape="closeOnPressEscape"
    :custom-class="classname"
    :modal="modal"
    :modalAppendToBody="modalAppendToBody"
    :direction="direction"
    :showClose="showClose"
    :size="size"
    :visible.sync="iVisible"
    :wrapperClosable="wrapperClosable"
    :withHeader="withHeader"
    destroy-on-close
    @close="onClose"
  >
    <template v-if="header" slot="title">
      <mis-component
        :mis-name="header.renderer"
        :path="`${path}/${header.renderer}`"
        :action="onClose"
        :after-action="onClose"
        :props="getProps(header, data)"
      />
    </template>
    <template v-for="(item, index) in body">
      <mis-component
        :mis-name="item.renderer"
        :key="index"
        :path="`${path}/${index}/${item.renderer}`"
        :footer="item.footer"
        :action="onClose"
        :props="getProps(item, data)"
      />
    </template>
    <template v-if="footer">
      <mis-component
        v-for="(item, index) in footer"
        :mis-name="item.renderer"
        :key="index"
        :path="`${path}/${index}/${item.renderer}`"
        :footer="item.footer"
        :action="onClose"
        :props="getProps(item, data)"
      />
    </template>
  </el-drawer>
</template>
<script>
import ElDrawer from 'element-ui/lib/drawer';
import derivedProp from '../../mixin/derivedProp';

export default {
  name: 'MisDrawer',
  components: {
    ElDrawer,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    appendToBody: {
      type: Boolean,
      required: false,
      default: false,
    },
    beforeClose: {
      type: Function,
      required: false,
    },
    closeOnPressEscape: {
      type: Boolean,
      required: false,
      default: true,
    },
    classname: {
      type: String,
      required: false,
    },
    modal: {
      type: Boolean,
      required: false,
      default: true,
    },
    modalAppendToBody: {
      type: Boolean,
      required: false,
      default: true,
    },
    direction: {
      type: String,
      required: false,
      options: ['rtl', 'ltr', 'ttb', 'btt'],
      default: 'rtl',
    },
    showClose: {
      type: Boolean,
      required: false,
      default: true,
    },
    size: {
      type: [String, Number],
      required: false,
      default: '30%',
    },
    header: {
      type: [String, Object],
      required: false,
    },
    visible: {
      type: Boolean,
      required: false,
    },
    wrapperClosable: {
      type: Boolean,
      required: false,
    },
    withHeader: {
      type: Boolean,
      required: false,
      default: true,
    },
    name: {
      type: String,
      required: true,
    },
    data: {
      type: [Array, Object],
      required: true,
    },
    body: {
      type: [Array, Object],
      required: true,
    },
    footer: {
      type: [Array, Object],
      required: false,
    },
    onActionDisvisiable: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      iVisible: false,
    };
  },
  mixins: [derivedProp],
  watch: {
    visible(val) {
      this.iVisible = val;
    },
  },
  methods: {
    onClose() {
      this.iVisible = false;
      this.onActionDisvisiable && this.onActionDisvisiable();
    },
  },
};
</script>
