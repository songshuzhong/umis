<template>
  <el-switch
    v-model="iValue"
    :disabled="disabled"
    :width="width"
    :active-icon-class="activeIconClass"
    :active-text="activeText"
    :inactive-text="inActiveText"
    :active-value="activeValue"
    :inactive-value="inActiveValue"
    :active-color="activeColor"
    :inactive-color="inActiveColor"
    @change="onChange"
  />
</template>
<script>
import ElSwitch from 'element-ui/lib/switch';
import linkage from '../../mixin/linkage';

export default {
  name: 'MisSwitch',
  components: {
    ElSwitch,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [Boolean, String, Number],
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    width: {
      type: Number,
      required: false,
    },
    activeIconClass: {
      type: String,
      required: false,
    },
    activeText: {
      type: String,
      required: false,
    },
    inActiveText: {
      type: String,
      required: false,
    },
    activeValue: {
      type: [Boolean, String, Number],
      required: false,
      default: true,
    },
    inActiveValue: {
      type: [Boolean, String, Number],
      required: false,
      default: false,
    },
    activeColor: {
      type: String,
      required: false,
    },
    inActiveColor: {
      type: String,
      required: false,
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
    onChange(val) {
      const linkage = {};
      this.iValue = val;
      linkage[this.name] = this.iValue;

      this.$emit('input', this.iValue);
      this.linkageTrigger(this.target, linkage);
    },
  },
};
</script>
