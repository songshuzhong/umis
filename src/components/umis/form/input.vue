<template>
  <el-imput
    v-model="iValue"
    :name="name"
    :label="label"
    :type="type"
    :size="size"
    :disabled="disabled"
    :readonly="readonly"
    :minlength="minlength"
    :maxlength="maxlength"
    :clearable="clearable"
    :placeholder="placeholder"
    :show-password="showPassword"
    :show-word-limit="showWordLimit"
    @change="onChange"
  />
</template>

<script>
import ElImput from 'element-ui/lib/input';

export default {
  name: 'MisInput',
  components: {
    ElImput,
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
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    minlength: {
      type: Number,
      required: false,
    },
    maxlength: {
      type: Number,
      required: false,
    },
    showWordLimit: {
      type: Boolean,
      required: false,
    },
    showPassword: {
      type: Boolean,
      required: false,
    },
    placeholder: {
      type: String,
      required: true,
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
    prefixIcon: {
      type: String,
      required: true,
    },
    suffixIcon: {
      type: String,
      required: true,
    },
    rows: {
      type: Number,
      required: false,
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
