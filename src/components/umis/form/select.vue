<template>
  <el-select
    v-model="iValue"
    :name="name"
    :disabled="disabled"
    :multiple="multiple"
    :filterable="filterable"
    :placeholder="placeholder"
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
import ElSelect from 'element-ui/lib/select';
import ElOption from 'element-ui/lib/option';

export default {
  name: 'MisSelect',
  components: {
    ElSelect,
    ElOption,
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
    joinValue: {
      type: Boolean,
      required: false,
    },
    filterable: {
      type: Boolean,
      required: false,
    },
    placeholder: {
      type: String,
      required: true,
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
