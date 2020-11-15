<template>
  <el-input-number
    v-model="iData"
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

import linkage from '../mixin/linkage';

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
  },
  data() {
    return {
      iData: 0,
    };
  },
  mixins: [linkage],
  methods: {
    handleChange(value) {
      this.iData = value;
      if (this.target) {
        const triggerData = {};
        triggerData[this.name] = this.iData;
        this.onLinkageTrigger(triggerData);
      }
    },
  },
};
</script>
