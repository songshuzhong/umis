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
import { Form } from 'element-ui';

import derivedProp from '../mixin/derivedProp';

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
];

export default {
  name: 'MisForm',
  components: {
    ElForm: Form,
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
  },
  data() {
    return {
      formItems,
      iLoading: false,
      data: this.controls.reduce((total, control) => {
        const name = control.name || '';
        const value = control.value;
        if (name && formItems.includes(control.renderer)) {
          total[name] = value;
        }
        return total;
      }, {}),
    };
  },
  mixins: [derivedProp],
  methods: {
    onBeforeSubmit() {
      this.$refs['mis-form'].validate(valid => {
        if (valid) {
          this.sendFormData();
        }
      });
    },
    sendFormData() {
      if (this.api) {
        const formData = new FormData();
        for (let name in this.data) {
          if (this.data.hasOwnProperty(name))
            formData.append(name, this.data[name]);
        }
        this.iLoading = true;
        this.$http(this.api, 'post', formData)
          .then(({ data }) => {
            this.$notice({
              type: 'success',
              title: '通知',
              message: data.msg,
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
            this.iLoading = false;
          });
      }
    },
  },
};
</script>
