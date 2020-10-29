<template>
  <el-form
    v-loading="iLoading"
    class="mis-form"
    ref="mis-form"
    :label-width="labelWidth + 'px'"
    :model="data"
  >
    <mis-field
      v-for="(field, index) in controls"
      v-model="data[field.name]"
      :key="field.renderer + index"
      :name="field.name"
      :field="field"
      :data="data"
      :path="`${path}/${index}/${field.renderer}`"
      :action="onBeforeSubmit"
    />
  </el-form>
</template>
<script>
import { Form } from 'element-ui';

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
      default: 130,
    },
  },
  data() {
    return {
      iLoading: false,
      data: this.controls.reduce(function(total, control) {
        const name = control.name || '';
        const value = control.value;
        if (name) {
          total[name] = value;
        }
        return total;
      }, {}),
    };
  },
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
