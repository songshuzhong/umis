<template>
  <transition :name="field.transition">
    <el-form-item
      v-show="iHidden"
      v-if="iVisible"
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
        :linkage-trigger="linkageTrigger"
      />
    </el-form-item>
  </transition>
</template>

<script>
import ElTooltip from 'element-ui/lib/tooltip';
import ElFormItem from 'element-ui/lib/form-item';
import visible from '../../mixin/visible';

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
    handleInvisible: {
      type: Function,
      required: true,
    },
    action: {
      type: Function,
      required: true,
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
  mixins: [visible],
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
    iVisible: {
      handler(val) {
        this.handleInvisible(val, this.name);
      },
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
