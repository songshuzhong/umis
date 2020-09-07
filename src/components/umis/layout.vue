<template>
  <el-container :direction="direction" :class="classname">
    <template v-for="(item, index) in body">
      <mis-component
        :mis-name="item.renderer"
        :key="index"
        :store="store"
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

import derivedProp from '~components/mixin/derivedProp';
import initApi from '~components/mixin/initApi';

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
    store: {
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
