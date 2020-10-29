<template>
  <el-select
    v-model="iValue"
    multiple
    :name="name"
    :disabled="disabled"
    placeholder="请选择"
    @change="onChange"
  >
    <el-option
      v-for="option in options"
      :key="option.value"
      :label="option.text"
      :value="{ value: option.value, text: option.text }"
      :disabled="option.disabled"
    >
    </el-option>
  </el-select>
</template>
<script>
import { Select, Option } from 'element-ui';

export default {
  name: 'MisSelect',
  components: {
    ElSelect: Select,
    ElOption: Option,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    multiple: {
      type: Boolean,
      required: false,
    },
  },
  data: () => ({
    iValue: '',
  }),
  methods: {
    onChange() {
      this.$emit('input', this.iValue);
    },
  },
};
</script>
