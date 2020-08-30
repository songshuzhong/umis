<template>
  <el-container :direction="direction" :class="classname">
    <template v-for="(item, index) in body">
      <component
        :is="item.renderer"
        :key="index"
        :store="store"
        v-bind="item"
      />
    </template>
  </el-container>
</template>

<script>
import ElContainer from 'element-ui/lib/container';
import ElHeader from 'element-ui/lib/header';
import ElAside from 'element-ui/lib/aside';
import ElMain from 'element-ui/lib/main';
import ElFooter from 'element-ui/lib/footer';

import initApi from '~components/mixin/initApi';

export default {
  name: 'MisLayout',
  components: {
    ElContainer,
    ElHeader,
    ElMain,
    ElAside,
    ElFooter,
  },
  props: {
    body: {
      type: Array,
      required: true,
    },
    direction: {
      type: String,
      required: false,
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
  mixins: [initApi],
};
</script>
