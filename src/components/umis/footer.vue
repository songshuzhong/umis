<template>
  <el-footer :class="classname">
    <template v-for="(item, index) in body">
      <component :is="item.renderer" :key="index" v-bind="item" />
    </template>
  </el-footer>
</template>

<script>
import ElFooter from 'element-ui/lib/footer';

export default {
  name: 'MisMain',
  components: {
    ElFooter,
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
