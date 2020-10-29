<template>
  <el-submenu
    :index="index"
    :popper-class="popperClass"
    :class="classname"
    :show-timeout="showTimeout"
    :hide-timeout="hideTimeout"
    :disabled="disabled"
    :popper-append-to-body="appendToBody"
  >
    <template v-if="title" slot="title">
      <i :class="icon" />
      <span slot="title">{{ title }}</span>
    </template>
    <template
      v-for="(item, index) in body"
      :key="index"
    >
      <mis-component
        :mis-name="item.renderer"
        :path="`${path}/${index}/${item.renderer}`"
        :label="item.label"
        :name="item.name"
        :body="item.body"
      />
    </template>
  </el-submenu>
</template>
<script>
import { Submenu } from 'element-ui';

export default {
  name: 'MisSubmenu',
  components: {
    ElSubmenu: Submenu,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    index: {
      type: String,
      required: true,
    },
    classname: {
      type: String,
      required: false,
    },
    popperClass: {
      type: String,
      required: false,
    },
    showTimeout: {
      type: Number,
      required: false,
      default: 300,
    },
    hideTimeout: {
      type: Number,
      required: false,
      default: 300,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    appendToBody: {
      type: Boolean,
      required: false,
    },
    body: {
      type: Array,
      required: false,
    },
  },
};
</script>
