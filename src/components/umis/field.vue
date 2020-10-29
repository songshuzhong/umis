<template>
  <el-form-item
    v-if="iHidden"
    v-show="iVisible"
    :label="field.label"
    :prop="field.name"
    :class="field.className"
    :rules="field.rules"
  >
    <span v-if="field.label" slot="label" class="umis-form-field">
      <span class="umis-form-field__label">{{ field.label }}</span>
      <el-tooltip v-if="field.tip">
        <el-button>
          <i class="el-icon-info" />
        </el-button>
        <div slot="content" v-html="field.tip" />
      </el-tooltip>
    </span>
    <component
      v-bind="field"
      :is="field.renderer"
      :path="`${path}/${field.renderer}`"
      :name="field.name"
      :data="data"
      :value="iValue"
      :disabled="iDisabled"
      :action="action"
      @input="onInput($event)"
    />
  </el-form-item>
</template>

<script>
import { Tooltip, FormItem } from 'element-ui';

export default {
  name: 'MisField',
  components: {
    ElTooltip: Tooltip,
    ElFormItem: FormItem,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    field: {
      type: Object,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
    action: {
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
    iValue(val) {
      this.$emit('input', val);
    },
  },
  computed: {
    iHidden() {
      if (this.field.hiddenOn) {
        return !this.$onExpressionEval(this.field.hiddenOn, this.data);
      }
      return true;
    },
    iVisible() {
      if (this.field.visibleOn) {
        return this.$onExpressionEval(this.field.visibleOn, this.data);
      }
      return true;
    },
    iDisabled() {
      if (this.field.disabledOn) {
        return this.$onExpressionEval(this.field.disabledOn, this.data);
      }
      return false;
    },
  },
  methods: {
    onInput(value) {
      this.iValue = value;
    },
  },
};
</script>

<style lang="scss">
.umis-form-field {
  display: inline-block;
}
.umis-form-field__label {
  padding-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
</style>
