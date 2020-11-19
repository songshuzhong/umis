<template>
  <div class="umis-setting__cards">
    <el-card class="umis-setting__card-margin">
      <div slot="header">
        <span>表单类型</span>
      </div>
      <el-switch
        v-model="isFormData"
        active-text="formdata"
        inactive-text="application/json"
        @change="handleFormTypeChange"
      />
    </el-card>
    <setting-api />
    <setting-interceptor />
    <setting-style />
  </div>
</template>
<script>
import ElCard from 'element-ui/lib/card';
import ElSwitch from 'element-ui/lib/switch';

import SettingApi from './api';
import SettingStyle from './style';
import SettingInterceptor from './interceptor';

export default {
  name: 'UmisSettings',
  components: {
    ElCard,
    ElSwitch,
    SettingApi,
    SettingStyle,
    SettingInterceptor,
  },
  data() {
    return {
      isFormData: this.$umisConfig.isFormData,
    };
  },
  methods: {
    handleFormTypeChange(val) {
      this.$saveInitFormType(this, val);
    },
  },
};
</script>

<style lang="scss">
.umis-setting__cards {
  .umis-setting__card-margin {
    margin: 10px 0;
  }
  .umis-setting__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
