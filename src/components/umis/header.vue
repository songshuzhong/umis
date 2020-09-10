<template>
  <el-header :class="classname">
    <template v-for="(item, index) in body">
      <component
        :is="item.renderer"
        :key="index"
        :path="path + '/' + index + '/' + item.renderer"
        :store="store"
        v-bind="item"
      />
    </template>
  </el-header>
</template>

<script>
import ElHeader from 'element-ui/lib/header';

export default {
  name: 'MisHeader',
  components: {
    ElHeader,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    body: {
      type: Array,
      required: true,
    },
    classname: {
      type: String,
      required: false,
    },
    store: {
      type: Object,
      required: true,
    },
  },
};
</script>
