<template>
  <el-popconfirm
    confirm-button-text="好的"
    cancel-button-text="不用了"
    icon="el-icon-info"
    icon-color="red"
    title="这是一段内容确定删除吗？"
    @onConfirm="onConfirm"
    @onCancel="onConfirm"
  >
    <el-button slot="reference">删除</el-button>
  </el-popconfirm>
</template>
<script>
import ElPopconfirm from 'element-ui/lib/popconfirm';
import ElButton from 'element-ui/lib/button';

export default {
  name: 'MisDoc',
  components: {
    ElPopconfirm,
    ElButton,
  },
  methods: {
    onConfirm() {
      console.log(2345345235234);
    },
  },
};
</script>
