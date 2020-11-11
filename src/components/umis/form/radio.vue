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
import ElRadioGroup from 'element-ui/lib/radio-group';
import ElRadioButton from 'element-ui/lib/radio-button';
import ElRadio from 'element-ui/lib/radio';

import linkage from '../../mixin/linkage';

export default {
  name: 'MisRadio',
  components: {
    ElRadioGroup,
    ElRadioButton,
    ElRadio,
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
    value: {
      type: String,
      required: false,
    },
    target: {
      type: String,
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
  mixins: [linkage],
  methods: {
    onChange() {
      const linkage = {};
      linkage[this.name] = this.iValue;

      this.$emit('input', this.iValue);
      this.onLinkageTrigger(linkage);
    },
  },
};
</script>
