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
      {{ title }}
    </template>
    <template v-for="(item, index) in body">
      <component
        :is="item.renderer"
        :key="index"
        :label="item.label"
        :name="item.name"
        :body="item.body"
      />
    </template>
  </el-submenu>
</template>
<script>
import ElSubmenu from 'element-ui/lib/submenu';

export default {
  name: 'MisSubmenu',
  components: {
    ElSubmenu,
  },
  props: {
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
      required: false,
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
