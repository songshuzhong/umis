<template>
  <el-card class="umis-setting__card-margin">
    <div slot="header">
      <span>接口拦截器</span>
    </div>
  </el-card>
</template>

<script>
import ElCard from 'element-ui/lib/card';
import ElButtonGroup from 'element-ui/lib/button-group';
import ElButton from 'element-ui/lib/button';

export default {
  name: 'SettingInterceptor',
  components: {
    ElCard,
    ElButtonGroup,
    ElButton,
  },
};
</script>
