<template>
  <el-checkbox-group v-model="iValue" :name="name">
    <template v-if="type === 'button'">
      <el-checkbox-button
        v-for="(option, index) in options"
        :key="index"
        :label="option.value"
        @change="onSelect"
      >
        {{ option.text }}
      </el-checkbox-button>
    </template>
    <template v-else>
      <el-checkbox
        v-for="(option, index) in options"
        :key="index"
        :label="option.value"
        @change="onSelect"
      >
        {{ option.text }}
      </el-checkbox>
    </template>
  </el-checkbox-group>
</template>
<script>
import { CheckboxGroup, CheckboxButton, Checkbox } from 'element-ui';

export default {
  name: 'MisCheckbox',
  components: {
    ElCheckboxGroup: CheckboxGroup,
    ElCheckboxButton: CheckboxButton,
    ElCheckbox: Checkbox,
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
    type: {
      type: String,
      required: false,
      default: 'checkbox',
      options: ['checkbox', 'button'],
    },
  },
  data: () => ({
    iValue: [],
  }),
  methods: {
    onSelect() {
      this.$emit('input', this.iValue);
    },
  },
};
</script>
