<template>
  <el-tabs
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
      v-bind="getProps(item)"
    >
      <span slot="label">
        <i v-if="item.icon" :class="item.icon" />
        {{ item.label }}
      </span>
      <template
        v-if="Object.prototype.toString.call(item.body) === '[object Array]'"
      >
        <mis-component
          v-for="(child, index) in item.body"
          :mis-name="child.renderer"
          :path="`${path}/${index}/${child.renderer}`"
          :props="getProps(child, data)"
          :body="getBody(child, data)"
          v-bind="getProps(child, data)"
        />
      </template>
      <mis-component
        v-else
        :mis-name="item.body.renderer"
        :path="`${path}/${index}/${item.body.renderer}`"
        :props="getProps(item.body, data)"
        :body="getBody(item.body, data)"
        v-bind="getProps(item.body, data)"
      />
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
