<template>
  <el-form-item
    v-if="iHidden"
    v-show="iVisible"
    :label="field.label"
    :prop="field.prop || field.name"
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
import ElTooltip from 'element-ui/lib/tooltip';
import ElFormItem from 'element-ui/lib/form-item';
import linkage from '../../mixin/linkage';

export default {
  name: 'MisField',
  components: {
    ElTooltip,
    ElFormItem,
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
    prop: {
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
  mixins: [linkage],
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
