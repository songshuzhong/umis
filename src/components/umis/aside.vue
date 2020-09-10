<template>
  <el-aside :class="classname">
    <template v-for="(item, index) in body">
      <mis-component
        :mis-name="item.renderer"
        :key="index"
        :path="path + '/' + index + '/' + item.renderer"
        :store="store"
        :props="item"
      />
    </template>
  </el-aside>
</template>

<script>
import { Aside } from 'element-ui';

export default {
  name: 'MisAside',
  components: {
    ElAside: Aside,
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
    store: {
      type: Object,
      required: true,
    },
    classname: {
      type: String,
      required: false,
    },
  },
};
</script>
