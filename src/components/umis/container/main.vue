<template>
  <el-main :class="classname">
    <template v-if="Object.prototype.toString.call(body) === '[object Array]'">
      <mis-component
        v-for="(item, index) in body"
        :mis-name="item.renderer"
        :key="index"
        :path="`${path}/${index}/${item.renderer}`"
        :props="item"
      />
    </template>
    <mis-component
      v-else
      :mis-name="body.renderer"
      :path="`${path}${body.renderer}`"
      :props="body"
    />
    <template v-if="routerView">
      <router-view />
    </template>
  </el-main>
</template>

<script>
import ElMain from 'element-ui/lib/main';

import derivedProp from '../../mixin/derivedProp';

export default {
  name: 'MisMain',
  components: {
    ElMain,
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
  mixins: [derivedProp],
};
</script>
