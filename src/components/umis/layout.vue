<template>
  <el-container :direction="direction" :class="classname">
    <template
      v-for="(item, index) in body"
      :key="index"
    >
      <mis-component
        :mis-name="item.renderer"
        :path="`${path}/${index}/${item.renderer}`"
        :header="getHeader(item)"
        :body="getBody(item)"
        :footer="getFooter(item)"
        :props="getProps(item, data)"
        v-bind="getProps(item, data)"
      />
    </template>
  </el-container>
</template>

<script>
import { Container, Header, Aside, Main, Footer } from 'element-ui';

import derivedProp from '../mixin/derivedProp';
import initApi from '../mixin/initApi';

export default {
  name: 'MisLayout',
  components: {
    ElContainer: Container,
    ElHeader: Header,
    ElMain: Main,
    ElAside: Aside,
    ElFooter: Footer,
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
    direction: {
      type: String,
      required: false,
    },
    data: {
      type: Object,
      required: true,
    },
    classname: {
      type: String,
      required: false,
    },
  },
  mixins: [initApi, derivedProp],
};
</script>
