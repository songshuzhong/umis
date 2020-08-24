<template>
  <fragment>
    <el-button type="text" @click="iVisible = true">详细信息</el-button>
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
      :destroy-on-close="destroyOnClose"
    >
      <template v-for="(item, index) in iData.body">
        <component
          :key="index"
          :is="item.renderer"
          v-bind="item"
          :data="iData"
        />
      </template>
      <slot name="footer" />
    </el-dialog>
  </fragment>
</template>
<script>
import ElButton from 'element-ui/lib/button';
import ElDialog from 'element-ui/lib/dialog';

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
      default: true,
    },
    body: {
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
  },
  data() {
    return {
      iData: {},
      iVisible: false,
    };
  },
  watch: {
    data: {
      handler(val) {
        this.iData = val;
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    getHeader(data) {
      return this.$getRenderedTpl(this.header, data);
    },
  },
};
</script>
