<template>
  <el-form
    v-loading="iLoading"
    class="mis-form"
    ref="mis-form"
    :label-width="labelWidth"
    :label-position="labelPosition"
    :model="iData"
  >
    <template v-for="(item, index) in controls" :key="index">
      <mis-field
        v-if="formItems.includes(item.renderer)"
        v-model="iData[item.name]"
        :path="`${path}/${index}/${item.renderer}`"
        :name="item.name"
        :field="item"
        :data="iData"
        :hidden-on="item.hiddenOn"
        :visible-on="item.visibleOn"
        :disabled-on="item.disabledOn"
        :handle-invisible="handleInvisible"
        :action="onBeforeSubmit"
      />
      <mis-component
        v-else
        :mis-name="item.renderer"
        :props="getProps(item, iData)"
        :path="`${path}/${index}/${item.renderer}`"
      />
    </template>
  </el-form>
</template>
<script>
import ElForm from 'element-ui/lib/form';

import derivedProp from '../../mixin/derivedProp';
import linkage from '../../mixin/linkage';

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
    data: {
      type: Object,
      required: false,
      default: {},
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
    target: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      formItems: formItems,
      iLoading: false,
      invisibleField: [],
      iData: this.controls.reduce((total, control) => {
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
  mixins: [derivedProp, linkage],
  watch: {
    data: {
      handler(val) {
        if (val) {
          for (const name in this.iData) {
            if (this.iData.hasOwnProperty(name) && val.hasOwnProperty(name)) {
              this.iData[name] = val[name];
            }
          }
        }
      },
      immediate: true,
      deep: true,
    },
  },
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
      if (this.api) {
        const formData = this.$json2FormData(
          this.$umisConfig.isFormData,
          this.iData,
          this.invisibleField
        );
        this.iLoading = true;
        this.$api
          .slientApi()
          .post(this.api, formData)
          .then(res => {
            this.$notice({
              type: 'success',
              title: '通知',
              message: res.msg,
            });
            this.onLinkageTrigger();
          })
          .catch(e => {
            this.$notice({
              type: 'error',
              title: '警告',
              message: e.toString(),
            });
          })
          .finally(() => {
            this.iLoading = false;
          });
      }
    },
  },
};
</script>
