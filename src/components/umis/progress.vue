<template>
  <el-progress
    :type="type"
    :width="width"
    :color="color"
    :status="status"
    :show-text="showText"
    :percentage="data.percentage"
    :stroke-width="strokeWidth"
    :textInside="textInside"
    :stroke-linecap="strokeLinecap"
  />
</template>

<script>
import ElProgress from 'element-ui/lib/progress';
import initData from '../mixin/initData';

export default {
  name: 'MisProgress',
  components: {
    ElProgress,
  },
  props: {
    name: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    percentage: {
      type: Number,
      required: true,
    },
    strokeWidth: {
      type: Number,
      required: false,
    },
    textInside: {
      type: Boolean,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    showText: {
      type: Boolean,
      required: false,
    },
    strokeLinecap: {
      type: String,
      required: false,
    },
  },
  mixins: [initData],
};
</script>
