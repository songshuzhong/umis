<template>
  <el-main :class="classname">
    <template v-if="body.length">
      <mis-component
        :mis-name="item.renderer"
        :key="index"
        :props="item"
        v-for="(item, index) in body"
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
