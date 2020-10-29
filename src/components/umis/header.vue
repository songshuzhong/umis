<template>
  <el-header :class="classname">
    <template
      v-for="(item, index) in body"
      :key="index"
    >
      <mis-component
        :mis-name="item.renderer"
        :path="`${path}/${index}/${item.renderer}`"
        :title="item.title"
        :header="getHeader(item)"
        :body="getBody(item)"
        :footer="getFooter(item)"
        :props="item"
      />
    </template>
  </el-header>
</template>

<script>
import { Header } from 'element-ui';

import derivedProp from '../mixin/derivedProp';

export default {
  name: 'MisHeader',
  components: {
    ElHeader: Header,
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
  mixins: [derivedProp],
};
</script>
