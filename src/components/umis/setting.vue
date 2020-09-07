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
    </el-card>
  </div>
</template>
<script>
import { Card } from 'element-ui';

import Api from '~components/umis/api';

export default {
  name: 'MisSetting',
  components: {
    ElCard: Card,
    Api,
  },
};
</script>
