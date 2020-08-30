<template>
  <el-dialog
    v-bind="$props"
    :visible.sync="iVisible"
    :title="title"
    :width="width"
    :fullscreen="fullscreen"
    :modal="modal"
    :lock-scroll="lockScroll"
    :close-on-click-modal="closeOnModal"
    :show-close="showClose"
    :appendToBody="appendToBody"
    :destroy-on-close="destroyOnClose"
    @close="onClose"
  >
    <template v-if="Object.prototype.toString.call(body) === '[object Object]'">
      <component :is="body.renderer" v-bind="body" :data="data" />
    </template>
    <template v-else>
      <template v-for="(item, index) in body">
        <component
          :is="item.renderer"
          :key="index"
          :header="getHeader(item)"
          :body="getBody(item)"
          :footer="getFooter(item)"
          v-bind="getProps(item, data)"
        />
      </template>
    </template>
    <slot name="footer" />
  </el-dialog>
</template>
<script>
import ElButton from 'element-ui/lib/button';
import ElDialog from 'element-ui/lib/dialog';

import derivedProp from '~components/mixin/derivedProp';

export default {
  name: 'MisDialog',
  components: {
    ElDialog,
    ElButton,
  },
  props: {
    text: {
      type: String,
      required: false,
    },
    visible: {
      type: Boolean,
      required: false,
    },
    title: {
      type: String,
      required: false,
      default: 'Dialog',
    },
    width: {
      type: String,
      required: false,
    },
    fullscreen: {
      type: String,
      required: false,
    },
    modal: {
      type: Boolean,
      required: false,
      default: true,
    },
    lockScroll: {
      type: Boolean,
      required: false,
      default: false,
    },
    closeOnModal: {
      type: Boolean,
      required: false,
      default: true,
    },
    showClose: {
      type: Boolean,
      required: false,
      default: true,
    },
    destroyOnClose: {
      type: Boolean,
      required: false,
      default: false,
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
    data: {
      type: [Array, Object],
      required: false,
    },
    classname: {
      type: String,
      required: false,
    },
    onActionDisvisiable: {
      type: Function,
      required: false,
    },
    appendToBody: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  mixins: [derivedProp],
  watch: {
    visible: {
      handler(val) {
        this.iVisible = val;
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      iVisible: false,
    };
  },
  methods: {
    onOpen() {
      this.iVisible = true;
    },
    onClose() {
      this.iVisible = false;
      this.onActionDisvisiable && this.onActionDisvisiable();
    },
  },
};
</script>
