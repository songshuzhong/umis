<template>
  <el-main :class="classname">
    <template v-for="(item, index) in body">
      <component :is="item.renderer" :key="index" v-bind="item" />
    </template>
  </el-main>
</template>

<script>
import ElMain from 'element-ui/lib/main';

export default {
  name: 'MisMain',
  components: {
    ElMain,
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
