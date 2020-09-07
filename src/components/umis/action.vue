<template>
  <fragment>
    <component
      :is="actionType"
      :visible="visible"
      :data="data"
      :on-action-disvisiable="onDisVisiable"
      v-bind="getBody($props)"
    />
    <el-button @click="onClick">{{ text }}</el-button>
  </fragment>
</template>
<script>
import { Button } from 'element-ui';

import derivedProp from '~components/mixin/derivedProp';

export default {
  name: 'MisAction',
  components: {
    ElButton: Button,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    actionType: {
      type: String,
      required: true,
    },
    renderer: {
      type: String,
      required: true,
    },
    classname: {
      type: String,
      required: false,
    },
    data: {
      type: Object,
      required: false,
    },
    body: {
      type: [Array, Object],
      required: false,
    },
    action: {
      type: Function,
      required: false,
    },
  },
  mixins: [derivedProp],
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    onDisVisiable() {
      this.visible = false;
    },
    onClick() {
      if (this.actionType === 'mis-dialog') {
        this.visible = true;
      }
      this.action && this.action();
      this.afterAction && this.afterAction();
    },
  },
};
</script>
