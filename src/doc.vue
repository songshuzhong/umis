<template>
  <el-form :model="formInline" class="demo-form-inline">
    <el-form-item label="审批人">
      <el-input v-model="formInline.user" placeholder="审批人" />
    </el-form-item>
    <el-form-item label="活动区域">
      <el-transfer v-model="formInline.transfer" :data="transferData" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElTransfer,
} from 'element-plus';

export default {
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElTransfer,
  },
  data() {
    const transferData = [];
    for (let i = 1; i <= 15; i++) {
      transferData.push({
        key: i,
        label: `备选项 ${i}`,
        disabled: i % 4 === 0,
      });
    }
    return {
      transferData,
      formInline: {
        transfer: [],
        user: '',
        region: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  },
};
</script>
