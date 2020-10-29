<template>
  <el-menu-item :name="name" :index="name">
    {{ label }}
  </el-menu-item>
</template>

<script>
import { MenuItem } from 'element-ui';

export default {
  name: 'MisMenuItem',
  components: {
    ElMenuItem: MenuItem,
  },
  props: {
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
  },
};
</script>
