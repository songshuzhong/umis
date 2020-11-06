<template>
  <el-form
    v-loading="iLoading"
    class="mis-form"
    ref="mis-form"
    :label-width="labelWidth"
    :label-position="labelPosition"
    :model="data"
  >
    <template v-for="(item, index) in controls" :key="index">
      <mis-field
        v-if="formItems.includes(item.renderer)"
        v-model="data[item.name]"
        :name="item.name"
        :field="item"
        :data="data"
        :hiddenOn="item.hiddenOn"
        :visibleOn="item.visibleOn"
        :disabledOn="item.disabledOn"
        :path="`${path}/${index}/${item.renderer}`"
        :action="onBeforeSubmit"
      />
      <mis-component
        v-else
        :mis-name="item.renderer"
        :props="getProps(item, data)"
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
    target: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      formItems: formItems,
      iLoading: false,
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
  mixins: [derivedProp, linkage],
  methods: {
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
        let formData = new FormData();
        if (this.$umisConfig.isFormData) {
          for (let name in this.data) {
            if (this.data.hasOwnProperty(name))
              formData.append(name, this.data[name]);
          }
        } else {
          formData = this.data;
        }
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
