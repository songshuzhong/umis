<template>
  <el-tree :data="value" />
</template>

<script>
import { Tree } from 'element-ui';

export default {
  name: 'MisTree',
  components: {
    ElTree: Tree,
  },
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
};
</script>
