<template>
  <el-container :direction="direction" :class="classname">
    <template v-for="(item, index) in body">
      <mis-component
        :mis-name="item.renderer"
        :key="index"
        :path="`${path}/${index}/${item.renderer}`"
        :header="getHeader(item)"
        :body="getBody(item)"
        :footer="getFooter(item)"
        :props="getFattingProps(item, data)"
        v-bind="getFattingProps(item, data)"
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

import derivedProp from '../../mixin/derivedProp';
import initApi from '../../mixin/initApi';

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
