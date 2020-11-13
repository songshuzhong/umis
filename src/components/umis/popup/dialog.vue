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
        <mis-component
          :mis-name="item.renderer"
          :key="index"
          :path="`${path}/${index}/${item.renderer}`"
          :header="getHeader(item)"
          :body="getBody(item)"
          :footer="getFooter(item)"
          :props="getFattingProps(item, data)"
        />
      </template>
    </template>
    <div slot="footer">
      <template
        v-if="Object.prototype.toString.call(footer) === '[object Array]'"
      >
        <mis-component
          :mis-name="item.renderer"
          :key="index"
          :path="`${path}/${index}/${item.renderer}`"
          :header="getHeader(item)"
          :body="getBody(item)"
          :footer="getFooter(item)"
          :props="getFattingProps(item, data)"
          v-for="(item, index) in footer"
        />
      </template>
      <template
        v-if="Object.prototype.toString.call(footer) === '[object Object]'"
      >
        <mis-component
          :mis-name="footer.renderer"
          :path="`${path}/${footer.renderer}`"
          :header="getHeader(footer)"
          :body="getBody(footer)"
          :footer="getFooter(footer)"
          :props="getFattingProps(footer, data)"
        />
      </template>
    </div>
  </el-dialog>
</template>
<script>
import ElDialog from 'element-ui/lib/dialog';

import derivedProp from '../../mixin/derivedProp';

export default {
  name: 'MisDialog',
  components: {
    ElDialog,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
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
      default: true,
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
    onClose() {
      this.iVisible = false;
      this.onActionDisvisiable && this.onActionDisvisiable();
    },
  },
};
</script>
