<template>
  <fragment>
    <component
      v-bind="getBody($props)"
      :path="`${path}/${actionType}`"
      :is="actionType"
      :visible="visible"
      :init-data="data"
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
        :disabled="iApiLoading"
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
      <el-badge :value="badgeText" :class="badgeClass">
        <el-button
          v-loading="iApiLoading"
          :size="size"
          :type="type"
          :plain="plain"
          :round="round"
          :circle="circle"
          :disabled="iApiLoading"
          @click="onClick"
        >
          {{ text }}
        </el-button>
      </el-badge>
    </el-tooltip>
  </fragment>
</template>
<script>
import ElPopconfirm from 'element-ui/lib/popconfirm';
import ElTooltip from 'element-ui/lib/tooltip';
import ElBadge from 'element-ui/lib/badge';
import ElButton from 'element-ui/lib/button';

import derivedProp from '../mixin/derivedProp';
import initData from '../mixin/initData';

export default {
  name: 'MisAction',
  components: {
    ElPopconfirm,
    ElTooltip,
    ElBadge,
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
    badgeText: {
      type: String,
      required: false,
    },
    badgeClass: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      iApiLoading: false,
      visible: false,
      clipboard: '',
    };
  },
  mixins: [derivedProp, initData],
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
      this.action && this.action(this.handleLoading);
    },
    handleLoading() {
      this.iApiLoading = false;
    },
  },
};
</script>
