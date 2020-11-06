<template>
  <fragment>
    <component
      :is="actionType"
      :visible="visible"
      :data="data"
      :path="`${path}/${actionType}`"
      :on-action-disvisiable="onDisVisiable"
      v-bind="getBody($props)"
    />
    <el-button @click="onClick">{{ text }}</el-button>
  </fragment>
</template>
<script>
import ElButton from 'element-ui/lib/button';

import derivedProp from '../mixin/derivedProp';

export default {
  name: 'MisAction',
  components: {
    ElButton,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
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
