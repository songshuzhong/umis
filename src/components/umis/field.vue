<template>
  <el-form-item
    v-if="iVisible"
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
      :path="path + '/' + field.renderer"
      :name="field.name"
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
import switches from '~components/mixin/switches';

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
    field: {
      type: Object,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    },
  },
  mixins: [switches],
  mounted() {
    this.iValue = this.field.value;
    this.$eventHub.$emit('mis-field:change', this.field.name, this.iValue);
  },
  methods: {
    onInput(value) {
      this.iValue = value;
      this.$eventHub.$emit('mis-field:change', this.field.name, value);
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
