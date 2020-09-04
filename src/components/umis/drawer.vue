<template>
  <fragment>
    <el-button type="text" @click="iVisible = true">{{ label }}</el-button>
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
    >
      <template v-if="title" slot="title">
        <component
          :is="title.renderer"
          :action="onClose"
          :after-action="onClose"
          v-bind="title"
        />
      </template>
      <template v-for="(item, index) in body">
        <component
          :is="item.renderer"
          :key="index"
          :visible="iVisible"
          :footer="item.footer"
          :action="onClose"
          :after-action="onClose"
          v-bind="item"
        />
      </template>
      <template v-for="(item, index) in footer">
        <component
          :is="item.renderer"
          :key="index"
          :visible="iVisible"
          :footer="item.footer"
          :action="onClose"
          :after-action="onClose"
          v-bind="item"
        />
      </template>
    </el-drawer>
  </fragment>
</template>
<script>
import ElButton from 'element-ui/lib/button';
import ElDrawer from 'element-ui/lib/drawer';

export default {
  name: 'MisDrawer',
  components: {
    ElButton,
    ElDrawer,
  },
  props: {
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
    title: {
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
    label: {
      type: String,
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
  },
  data() {
    return {
      iVisible: false,
    };
  },
  methods: {
    onClose() {
      this.iVisible = false;
    },
  },
};
</script>
