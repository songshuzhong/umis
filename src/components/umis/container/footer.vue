<template>
  <el-footer :class="classname">
    <template v-for="(item, index) in body">
      <mis-component
        :mis-name="item.renderer"
        :key="index"
        v-bind="item"
        :path="`${path}/${index}/${item.renderer}`"
      />
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
  },
};
</script>
