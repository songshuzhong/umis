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
    <el-popconfirm
      v-if="confirmTitle"
      :confirm-button-text="confirmBtnText"
      :cancel-button-text="confirmCancelBtnText"
      :confirm-button-type="confirmBtnType"
      :cancel-button-type="confirmCancelBtnType"
      :icon="confirmIcon"
      :icon-color="confirmIconColor"
      :hide-icon="confirmHideIcon"
      :title="confirmTitle"
      @onConfirm="onClick"
    >
      <el-button
        v-loading="iApiLoading"
        slot="reference"
        :size="size"
        :type="type"
        :plain="plain"
        :round="round"
        :circle="circle"
      >
        {{ text }}
      </el-button>
    </el-popconfirm>
    <el-tooltip
      v-else
      :disabled="tipDisabled"
      :effect="tipEffect"
      :content="tipContent"
      :placement="tipPlacement"
    >
      <el-button
        v-loading="iApiLoading"
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
import ElPopconfirm from 'element-ui/lib/popconfirm';
import ElTooltip from 'element-ui/lib/tooltip';
import ElButton from 'element-ui/lib/button';

import derivedProp from '../mixin/derivedProp';

export default {
  name: 'MisAction',
  components: {
    ElPopconfirm,
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
    confirmTitle: {
      type: String,
      required: false,
    },
    confirmCancelBtnText: {
      type: String,
      required: false,
    },
    confirmCancelBtnType: {
      type: String,
      required: false,
    },
    confirmBtnText: {
      type: String,
      required: false,
    },
    confirmBtnType: {
      type: String,
      required: false,
    },
    confirmIcon: {
      type: String,
      required: false,
    },
    confirmIconColor: {
      type: String,
      required: false,
    },
    confirmHideIcon: {
      type: Boolean,
      required: false,
    },
  },
  mixins: [derivedProp],
  data() {
    return {
      visible: false,
      clipboard: '',
      iApiLoading: false,
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
      if (['mis-ajax'].includes(this.actionType)) {
        this.iApiLoading = true;
      }
      if (typeof this.action === 'function') {
        const promise = this.action();
        if (promise && typeof promise.then === 'function') {
          promise.then(() => {
            this.iApiLoading = false;
          });
        }
      }
    },
  },
};
</script>
