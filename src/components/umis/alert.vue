<template>
  <el-alert
    :title="title"
    :type="type"
    :show-icon="showIcon"
    :description="description"
    :closable="closable"
    :center="center"
    :closeText="closeText"
  >
  </el-alert>
</template>
<script>
import { Alert } from 'element-ui';

export default {
  name: 'MisAlert',
  components: {
    ElAlert: Alert,
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'success',
    },
    showIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
    description: {
      type: String,
      required: false,
    },
    closable: {
      type: Boolean,
      required: false,
      default: false,
    },
    center: {
      type: Boolean,
      required: false,
      default: false,
    },
    closeText: {
      type: String,
      required: false,
    },
    classname: {
      type: String,
      required: false,
    },
  },
};
</script>
