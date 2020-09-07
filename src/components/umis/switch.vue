<template>
  <el-switch
    v-model="iValue"
    :disabled="disabled"
    :width="width"
    :activeIconClass="activeIconClass"
    :activeText="activeText"
    :inActiveText="inActiveText"
    :activeValue="activeValue"
    :inActiveValue="inActiveValue"
    :activeColor="activeColor"
    :inActiveColor="inActiveColor"
    :store="store"
  />
</template>
<script>
import { Switch } from 'element-ui';

import switches from '~components/umis/switches';

export default {
  name: 'MisSwitch',
  components: {
    ElSwitch: Switch,
  },
  props: {
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
    },
    inActiveValue: {
      type: [Boolean, String, Number],
      required: false,
    },
    activeColor: {
      type: String,
      required: false,
    },
    inActiveColor: {
      type: String,
      required: false,
    },
    store: {
      type: Object,
      required: false,
    },
  },
  mixins: [switches],
};
</script>
