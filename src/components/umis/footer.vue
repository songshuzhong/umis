<template>
  <el-footer :class="classname">
    <template v-for="(item, index) in body">
      <mis-component :mis-name="item.renderer" :key="index" :props="item" />
    </template>
  </el-footer>
</template>

<script>
import { Footer } from 'element-ui';

export default {
  name: 'MisMain',
  components: {
    ElFooter: Footer,
  },
  props: {
    body: {
      type: Array,
      required: true,
    },
    classname: {
      type: String,
      required: false,
    },
  },
};
</script>
