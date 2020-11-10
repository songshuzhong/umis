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
      :key="index"
      :label="item.label"
      :name="item.name"
      :lazy="true"
    >
      <span slot="label">
        <i v-if="item.icon" :class="item.icon" />
        {{ item.label }}
      </span>
      <mis-component
        :mis-name="item.renderer"
        :path="`${path}/${index}/${item.renderer}`"
        :props="getProps(item, data)"
        v-bind="getProps(item, data)"
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
