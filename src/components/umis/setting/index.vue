<template>
  <div>
    <el-card class="mis-card-margin">
      <div slot="header">
        <span>接口前缀</span>
      </div>
      <api />
    </el-card>
    <el-card class="mis-card-margin">
      <div slot="header">
        <span>全局样式</span>
      </div>
    </el-card>
    <el-card class="mis-card-margin">
      <div slot="header">
        <span>接口拦截器</span>
      </div>
      <div>
        <el-switch
          v-model="isFormData"
          active-text="formdata"
          inactive-text="application/json"
          @change="handleFormTypeChange"
        >
        </el-switch>
      </div>
    </el-card>
  </div>
</template>
<script>
import ElCard from 'element-ui/lib/card';
import ElSwitch from 'element-ui/lib/switch';

import Api from './api';

export default {
  name: 'MisSetting',
  components: {
    ElCard,
    ElSwitch,
    Api,
  },
  data() {
    return {
      isFormData: this.$umisConfig.isFormData,
    };
  },
  methods: {
    handleFormTypeChange(val) {
      this.$umisConfig.isFormData = val;
    },
  },
};
</script>
