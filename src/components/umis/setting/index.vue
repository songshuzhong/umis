<template>
  <div class="umis-setting__cards">
    <setting-api />
    <setting-style />
    <setting-interceptor />
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
      this.$umisConfig.isFormData = val;
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
  .umis-setting__header__save {
    display: block;
  }
}
</style>
