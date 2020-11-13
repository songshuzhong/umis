<template>
  <el-tabs
    :path="`${path}`"
    :type="type"
    :style="tabStyle"
    :stretch="stretch"
    :tab-position="tabPosition"
    v-model="iActiveName"
    @tab-click="onTabClick"
  >
    <el-tab-pane
      v-for="(item, index) in body"
      :key="`${path}/${index}`"
      :label="item.label"
      :name="item.name"
      :lazy="true"
      v-bind="getFattingProps(item)"
    >
      <span slot="label">
        <i v-if="item.icon" :class="item.icon" />
        {{ item.label }}
      </span>
      <template
        v-if="Object.prototype.toString.call(item.body) === '[object Object]'"
      >
        <mis-component
          :mis-name="item.body.renderer"
          :path="`${path}/${index}/${item.body.renderer}`"
          :props="getFattingProps(item.body, data)"
          :header="getHeader(item.body, data)"
          :body="getBody(item.body, data)"
          :footer="getFooter(item.body, data)"
          v-bind="getFattingProps(item.body, data)"
        />
      </template>
      <template
        v-else
        v-for="(child, index) in item.body"
        :key="`${path}/${index}/${child.renderer}`"
      >
        <mis-component
          :mis-name="child.renderer"
          :path="`${path}/${index}/${child.renderer}`"
          :props="getFattingProps(child, data)"
          :header="getHeader(child, data)"
          :body="getBody(child, data)"
          :footer="getFooter(child, data)"
          v-bind="getFattingProps(child, data)"
        />
      </template>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import ElTabs from 'element-ui/lib/tabs';
import ElTabPane from 'element-ui/lib/tab-pane';

import derivedProp from '../../mixin/derivedProp';

export default {
  name: 'MisTabs',
  components: {
    ElTabs,
    ElTabPane,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: '',
    },
    tabStyle: {
      type: Object,
      required: false,
    },
    tabPosition: {
      type: String,
      required: false,
      options: ['left', 'right', 'top', 'bottom'],
    },
    stretch: {
      type: Boolean,
      required: false,
      default: false,
    },
    activeName: {
      type: String,
      required: true,
    },
    body: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      iActiveName: '',
    };
  },
  mixins: [derivedProp],
  watch: {
    activeName: {
      handler(val) {
        this.iActiveName = val;
      },
      immediate: true,
    },
  },
  mounted() {},
  methods: {
    onTabClick() {},
  },
};
</script>
