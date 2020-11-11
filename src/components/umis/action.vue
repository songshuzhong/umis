<template>
  <fragment>
    <component
      v-bind="getBody($props)"
      :path="`${path}/${actionType}`"
      :is="actionType"
      :visible="visible"
      :data="data"
      :on-action-disvisiable="onDisVisiable"
    />
    <el-tooltip
      :disabled="tipDisabled"
      :effect="tipEffect"
      :content="tipContent"
      :placement="tipPlacement"
    >
      <el-button
        :size="size"
        :type="type"
        :plain="plain"
        :round="round"
        :circle="circle"
        @click="onClick"
      >
        {{ text }}
      </el-button>
    </el-tooltip>
  </fragment>
</template>
<script>
import ElTooltip from 'element-ui/lib/tooltip';
import ElButton from 'element-ui/lib/button';

import derivedProp from '../mixin/derivedProp';

export default {
  name: 'MisAction',
  components: {
    ElTooltip,
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
    size: {
      type: String,
      required: false,
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
    tipDisabled: {
      type: Boolean,
      required: false,
      default: true,
    },
    tipEffect: {
      type: String,
      required: false,
    },
    tipContent: {
      type: String,
      required: false,
    },
    tipPlacement: {
      type: String,
      required: false,
    },
  },
  mixins: [derivedProp],
  data() {
    return {
      visible: false,
      clipboard: '',
    };
  },
  methods: {
    onDisVisiable() {
      this.visible = false;
    },
    onClick() {
      if (['mis-dialog', 'mis-drawer'].includes(this.actionType)) {
        this.visible = true;
      }
      this.action && this.action();
    },
  },
};
</script>
