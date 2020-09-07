<template>
  <el-aside :class="classname">
    <template v-for="(item, index) in body">
      <mis-component
        :mis-name="item.renderer"
        :key="index"
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
