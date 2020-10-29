<template>
  <el-main :class="classname">
    <template v-if="body.length">
      <mis-component
        v-for="(item, index) in body"
        :mis-name="item.renderer"
        :key="index"
        :path="`${path}/${index}/${item.renderer}`"
        :props="item"
      />
    </template>
    <template v-if="routerView">
      <router-view />
    </template>
  </el-main>
</template>

<script>
import { Main } from 'element-ui';

export default {
  name: 'MisMain',
  components: {
    ElMain: Main,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    body: {
      type: Array,
      required: false,
    },
    routerView: {
      type: Boolean,
      required: false,
    },
    classname: {
      type: String,
      required: false,
    },
  },
};
</script>
