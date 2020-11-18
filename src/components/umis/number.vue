<template>
  <el-input-number
    v-model="data.percentage"
    :min="min"
    :max="max"
    :size="size"
    :name="name"
    :label="label"
    :disabled="disabled"
    :precision="precision"
    :placeholder="placeholder"
    :controls-position="controlsPosition"
    @change="handleChange"
  />
</template>

<script>
import ElInputNumber from 'element-ui/lib/input-number';
import initData from '../mixin/initData';

export default {
  name: 'MisNumber',
  components: {
    ElInputNumber,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    min: {
      type: Number,
      required: false,
    },
    max: {
      type: Number,
      required: false,
    },
    step: {
      type: Number,
      required: false,
      default: 1,
    },
    precision: {
      type: Number,
      required: false,
    },
    stepStrictly: {
      type: Boolean,
      required: false,
    },
    size: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    controlsPosition: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: false,
    },
    linkageTrigger: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      data: {
        percentage: 0,
      },
    };
  },
  mixins: [initData],
  methods: {
    handleChange(value) {
      if (this.target) {
        const triggerData = {};
        triggerData[this.name] = value;
        this.linkageTrigger(this.target, triggerData);
      }
    },
  },
};
</script>
