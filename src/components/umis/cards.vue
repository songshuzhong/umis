<template>
  <el-row v-if="iVisible" v-loading="iApiLoading" :gutter="gutter">
    <el-col v-for="(item, index) in data" :span="span" :key="index">
      <el-card :shadow="shadow" :body-style="{ padding: 0 }" :class="classname">
        <template slot="header">
          <div v-html="renderHeader(header, item)" />
        </template>
        <div style="padding: 10px">
          <component
            v-if="body"
            :is="body.renderer"
            :body="getBody(body)"
            :header="getHeader(body)"
            :footer="getFooter(body)"
            v-bind="getProps(body)"
          />
        </div>
        <div class="el-card__footer" v-if="footer">
          <template v-for="(foot, index) in footer">
            <component
              :is="foot.renderer"
              :key="index"
              :header="getHeader(foot)"
              :body="getBody(foot)"
              :footer="getFooter(foot)"
              v-bind="getProps(foot, item)"
            />
          </template>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import ElRow from 'element-ui/lib/row';
import ElCol from 'element-ui/lib/col';
import ElCard from 'element-ui/lib/card';

import initApi from '~components/mixin/initApi';
import derivedProp from '~components/mixin/derivedProp';
import switches from '~components/mixin/switches';

export default {
  name: 'MisCards',
  components: {
    ElRow,
    ElCol,
    ElCard,
  },
  props: {
    body: {
      type: [Array],
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
    gutter: {
      type: Number,
      required: false,
      default: 0,
    },
    span: {
      type: Number,
      required: false,
      default: 12,
    },
  },
  mixins: [initApi, derivedProp, switches],
  watch: {
    body: {
      handler(val) {
        this.iBody = val;
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    renderHeader(data) {
      return this.$getRenderedTpl(this.header, data);
    },
  },
};
</script>
