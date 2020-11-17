<template>
  <el-tabs
    v-model="iData.iActiveTab"
    :path="`${path}`"
    :type="type"
    :style="tabStyle"
    :stretch="stretch"
    :tab-position="tabPosition"
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
      <template v-if="isPanelAlive(item)">
        <template
          v-if="Object.prototype.toString.call(item.body) === '[object Object]'"
        >
          <mis-component
            :mis-name="item.body.renderer"
            :path="`${path}/${index}/${item.body.renderer}`"
            :props="getFattingProps(item.body, iData)"
            :header="getHeader(item.body, iData)"
            :body="getBody(item.body, iData)"
            :footer="getFooter(item.body, iData)"
            v-bind="getFattingProps(item.body, iData)"
          />
        </template>
        <template v-else>
          <template
            v-for="(child, index) in item.body"
            :key="`${path}/${index}/${child.renderer}`"
          >
            <mis-component
              :mis-name="child.renderer"
              :path="`${path}/${index}/${child.renderer}`"
              :props="getFattingProps(child, iData)"
              :header="getHeader(child, iData)"
              :body="getBody(child, iData)"
              :footer="getFooter(child, iData)"
              v-bind="getFattingProps(child, iData)"
            />
          </template>
        </template>
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
      iData: {
        iActiveTab: '',
      },
    };
  },
  mixins: [derivedProp],
  watch: {
    data: {
      handler(val) {
        Object.assign(this.iData, val);
      },
      immediate: true,
      deep: true,
    },
    activeName: {
      handler(val) {
        this.iData.iActiveTab = val;
      },
      immediate: true,
    },
  },
  methods: {
    isPanelAlive(item) {
      if (item.keepAlive === false) {
        return this.iData.iActiveTab === item.name;
      }
      return true;
    },
  },
};
</script>
