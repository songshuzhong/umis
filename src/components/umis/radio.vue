<template>
  <el-radio-group v-model="iValue" :name="name">
    <template v-if="type === 'button'">
      <el-radio-button
        v-for="(option, index) in options"
        :key="index"
        :label="option.value"
        @change="onChange"
      >
        {{ option.text }}
      </el-radio-button>
    </template>
    <template v-else>
      <el-radio
        v-for="(option, index) in options"
        :key="index"
        :label="option.value"
        @change="onChange"
      >
        {{ option.text }}
      </el-radio>
    </template>
  </el-radio-group>
</template>

<script>
import { RadioGroup, RadioButton, Radio } from 'element-ui';

export default {
  name: 'MisRadio',
  components: {
    ElRadioGroup: RadioGroup,
    ElRadioButton: RadioButton,
    ElRadio: Radio,
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
      default: 'radio',
      options: ['radio', 'button'],
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
