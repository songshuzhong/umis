<template>
  <el-tabs
    :type="type"
    :style="tabStyle"
    :stretch="stretch"
    :tab-position="tabPosition"
    v-model="iActiveName"
    @tab-click="onTabClick"
  >
    <e-l-tab-panel
      :key="index"
      :label="item.label"
      :name="item.name"
      v-for="(item, index) in body"
    >
      <span slot="label">
        <i v-if="item.icon" :class="item.icon" />
        {{ item.label }}
      </span>
      <component :is="item.renderer" v-bind="item" />
    </e-l-tab-panel>
  </el-tabs>
</template>
<script>
import ElTabs from 'element-ui/lib/tabs';
import ELTabPanel from 'element-ui/lib/tab-pane';

export default {
  name: 'MisTabs',
  components: {
    ElTabs,
    ELTabPanel,
  },
  props: {
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
