<template>
  <el-row v-loading="iApiLoading" :gutter="gutter">
    <el-col
      v-for="(item, index) in data"
      :span="span"
      :key="index"
      :xs="size[0]"
      :sm="size[1]"
      :md="size[2]"
      :lg="size[3]"
    >
      <el-card :shadow="shadow" :body-style="{ padding: 0 }" :class="classname">
        <template slot="header">
          <div v-html="renderHeader(item)" />
        </template>
        <div style="padding: 10px">
          <mis-component
            v-if="body"
            :mis-name="body.renderer"
            :path="`${path}/${index}/${body.renderer}`"
            :body="getBody(body)"
            :header="getHeader(body)"
            :footer="getFooter(body)"
            :props="getProps(body, item)"
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
              :props="getProps(foot, item)"
            />
          </template>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import { Row, Col, Card } from 'element-ui';

import initApi from '../mixin/initApi';
import derivedProp from '../mixin/derivedProp';

export default {
  name: 'MisCards',
  components: {
    ElRow: Row,
    ElCol: Col,
    ElCard: Card,
  },
  props: {
    path: {
      type: String,
      required: true,
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
    size: {
      type: Array,
      required: false,
      default: [24, 12, 8, 4],
    },
  },
  mixins: [initApi, derivedProp],
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
