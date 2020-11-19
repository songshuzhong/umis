<template>
  <el-card :shadow="shadow" :body-style="{ padding: 0 }" :class="classname">
    <template v-if="header" slot="header">
      <div v-html="renderHeader(data)" />
    </template>
    <div style="padding: 10px">
      <mis-component
        v-if="body"
        :mis-name="body.renderer"
        :path="`${path}/${body.renderer}`"
        :body="getBody(body)"
        :header="getHeader(body)"
        :footer="getFooter(body)"
        :props="getFattingProps(body, data)"
        v-bind="getFattingProps(body, data)"
      />
    </div>
    <div class="el-card__footer" v-if="footer">
      <template v-for="foot in footer">
        <mis-component
          :mis-name="foot.renderer"
          :key="index"
          :path="`${path}/${index}/${foot.renderer}`"
          :header="getHeader(foot)"
          :body="getBody(foot)"
          :footer="getFooter(foot)"
          :props="getFattingProps(foot, data)"
          v-bind="getFattingProps(foot, data)"
        />
      </template>
    </div>
  </el-card>
</template>

<script>
import ElCard from 'element-ui/lib/card';

import initApi from '../mixin/initApi';
import derivedProp from '../mixin/derivedProp';
import initData from '../mixin/initData';

export default {
  name: 'MisCard',
  components: {
    ElCard,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    body: {
      type: [Array, Object],
      required: false,
    },
    header: {
      type: String,
      required: false,
    },
    footer: {
      type: [Array, Object],
      required: false,
    },
    initApi: {
      type: [String, Object],
      required: false,
    },
    classname: {
      type: String,
      required: false,
    },
    bodyStyle: {
      type: Object,
      required: false,
    },
    shadow: {
      type: String,
      required: false,
      options: ['always', 'hover', 'never'],
      default: 'always',
    },
  },
  mixins: [initApi, initData, derivedProp],
  methods: {
    renderHeader(data) {
      return this.$getRenderedTpl(this.header, data);
    },
  },
};
</script>
