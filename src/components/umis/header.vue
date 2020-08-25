<template>
  <el-header :class="classname">
    <template v-for="(item, index) in body">
      <component
        :is="item.renderer"
        :key="index"
        v-bind="item"
        :store="store"
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
