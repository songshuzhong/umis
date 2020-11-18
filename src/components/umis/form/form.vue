<template>
  <el-form
    v-loading="iApiLoading"
    class="mis-form"
    ref="mis-form"
    :label-width="labelWidth"
    :label-position="labelPosition"
    :model="data"
    :inline="inline"
  >
    <template v-for="(item, index) in controls" :key="index">
      <mis-field
        v-if="formItems.includes(item.renderer)"
        v-model="data[item.name]"
        :path="`${path}/${index}/${item.renderer}`"
        :name="item.name"
        :field="item"
        :data="data"
        :hidden-on="item.hiddenOn"
        :visible-on="item.visibleOn"
        :disabled-on="item.disabledOn"
        :handle-invisible="handleInvisible"
        :linkage-trigger="onLinkageTrigger"
        :action="onBeforeSubmit"
      />
      <mis-component
        v-else
        :mis-name="item.renderer"
        :props="getFattingProps(item, data)"
        :path="`${path}/${index}/${item.renderer}`"
      />
    </template>
  </el-form>
</template>
<script>
import ElForm from 'element-ui/lib/form';

import derivedProp from '../../mixin/derivedProp';
import linkage from '../../mixin/linkage';
import initApi from '../../mixin/initApi';
import initData from '../../mixin/initData';

const formItems = [
  'mis-action',
  'mis-field',
  'mis-select',
  'mis-checkbox',
  'mis-radio',
  'mis-switch',
  'mis-button',
  'mis-datepicker',
  'mis-input',
  'mis-combo',
  'mis-upload',
];

export default {
  name: 'MisForm',
  components: {
    ElForm,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    api: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    controls: {
      type: Array,
      required: false,
    },
    labelWidth: {
      type: Number,
      required: false,
      default: '130px',
    },
    labelPosition: {
      type: String,
      required: false,
      default: 'right',
    },
    inline: {
      type: Boolean,
      required: false,
      default: false,
    },
    target: {
      type: String,
      required: false,
    },
    linkageTrigger: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      formItems: formItems,
      invisibleField: [],
      data: this.controls.reduce((total, control) => {
        const renderer = control.renderer;
        const name = control.name || '';
        const value = control.value;
        if (name && formItems.includes(renderer) && renderer !== 'mis-button') {
          total[name] = value;
        }
        return total;
      }, {}),
    };
  },
  mixins: [initApi, initData, derivedProp, linkage],
  methods: {
    handleInvisible(visible, field) {
      if (visible) {
        this.invisibleField = this.invisibleField.filter(
          item => item !== field
        );
      } else {
        this.invisibleField.push(field);
      }
    },
    onBeforeSubmit() {
      const form = this.$refs['mis-form'];
      form.validate(valid => {
        if (valid) {
          this.sendFormData();
        }
      });
    },
    sendFormData() {
      const formData = this.$json2FormData(
        this.$umisConfig.isFormData,
        this.data,
        this.invisibleField,
        this.target
      );
      if (this.target) {
        return this.linkageTrigger(this.target, formData);
      }
      if (this.api) {
        this.iApiLoading = true;
        this.$api
          .slientApi()
          .post(this.api, formData)
          .then(res => {
            this.$notice({
              type: 'success',
              title: '通知',
              message: res.msg,
            });
          })
          .catch(e => {
            this.$notice({
              type: 'error',
              title: '警告',
              message: e.toString(),
            });
          })
          .finally(() => {
            this.iApiLoading = false;
          });
      }
    },
  },
};
</script>
