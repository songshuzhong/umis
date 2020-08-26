<template>
  <fragment>
    <el-button
      :type="type"
      :plain="plain"
      :round="round"
      :circle="circle"
      :loading="loading"
      :disabled="disabled"
      :icon="icon"
      :nativeType="nativeType"
      @click="onClick"
    >
      {{ text }}
    </el-button>
    <template v-if="body">
      <component
        :is="body.renderer"
        v-bind="iProps"
        :data="iData"
        :header="iHeader"
        :body="iBody"
        :footer="iFooter"
      />
    </template>
  </fragment>
</template>
<script>
import ElButton from 'element-ui/lib/button';

import derivedProp from './derivedProp';

export default {
  name: 'MisButton',
  components: {
    ElButton,
  },
  props: {
    action: {
      type: Function,
      required: false,
    },
    afterAction: {
      type: Function,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
    },
    plain: {
      type: Boolean,
      required: false,
    },
    round: {
      type: Boolean,
      required: false,
    },
    circle: {
      type: Boolean,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    nativeType: {
      type: String,
      required: false,
    },
    classname: {
      type: String,
      required: false,
    },
    body: {
      type: [Array, Object],
      required: false,
    },
  },
  mixins: [derivedProp],
  methods: {
    onClick() {
      this.action();
      this.afterAction && this.afterAction();
    },
  },
};
</script>
