<template>
  <el-collapse v-model="data.value" :accordion="accordion">
    <template v-for="(item, index) in body" :key="`${path}/${index}`">
      <el-collapse-item
        :name="item.name"
        :title="item.title"
        :disabled="item.disabled"
      >
        <mis-component
          :mis-name="item.renderer"
          :path="`${path}/${index}/${item.renderer}`"
          :body="getBody(item)"
          :header="getHeader(item)"
          :footer="getFooter(item)"
          :props="getFattingProps(item, data)"
          v-bind="getFattingProps(item, data)"
        />
      </el-collapse-item>
    </template>
  </el-collapse>
</template>

<script>
import ElCollapse from 'element-ui/lib/collapse';
import ElCollapseItem from 'element-ui/lib/collapse-item';
import derivedProp from '../mixin/derivedProp';
import initData from '../mixin/initData';

export default {
  name: 'MisCollapse',
  components: {
    ElCollapse,
    ElCollapseItem,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    accordion: {
      type: Boolean,
      required: false,
      default: true,
    },
    body: {
      type: Array,
      required: true,
    },
  },
  watch: {
    value: {
      handler(val) {
        this.data.value = val;
      },
    },
  },
  mixins: [initData, derivedProp],
};
</script>
