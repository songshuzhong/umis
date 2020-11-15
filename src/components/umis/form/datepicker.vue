<template>
  <el-date-picker
    v-model="iValue"
    :name="name"
    :type="type"
    :label="label"
    :readonly="readonly"
    :disabled="disabled"
    :editable="editable"
    :clearable="clearable"
    :size="size"
    :placeholder="placeholder"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :default-value="defaultValue"
    :format="format"
    :align="align"
    :prefix-icon="prefixIcon"
    :unlink-panels="unlinkPanels"
    :clear-icon="clearIcon"
    @change="onChange"
  />
</template>
<script>
import ElDatePicker from 'element-ui/lib/date-picker';
export default {
  name: 'MisDatePicker',
  components: {
    ElDatePicker,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    editable: {
      type: Boolean,
      required: false,
      default: true,
    },
    clearable: {
      type: Boolean,
      required: false,
      default: true,
    },
    size: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    startPlaceholder: {
      type: String,
      required: true,
    },
    endPlaceholder: {
      type: String,
      required: true,
    },
    defaultValue: {
      type: Date,
      required: false,
    },
    format: {
      type: String,
      required: true,
    },
    align: {
      type: String,
      required: true,
    },
    prefixIcon: {
      type: String,
      required: true,
    },
    unlinkPanels: {
      type: Boolean,
      required: false,
    },
    clearIcon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      iValue: '',
    };
  },
  watch: {
    value: {
      handler(val) {
        this.iValue = val;
      },
      immediate: true,
    },
  },
  methods: {
    onChange(val) {
      this.$emit('input', val);
    },
  },
};
</script>
