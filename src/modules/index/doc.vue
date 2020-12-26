<template>
  <div class="umis-avatar__wrapper">
    <el-avatar shape="square" :size="100" :src="url" />
    <div class="umis-avatar__content">
      <div class="umis-avatar__title">这是一个标准的标题</div>
      <div class="umis-avatar__subtitle">这是一个特别的副标题说明</div>
      <div class="umis-avatar__description">
        这是一个很长很长很长很长很长的煎熬说明
      </div>
    </div>
  </div>
</template>
<script>
import {
  Form as ElForm,
  FormItem as ElFormItem,
  Collapse as ElCollapse,
  CollapseItem as ElCollapseItem,
  Input as ElInput,
  Switch as ElSwitch,
  Checkbox as ElCheckbox,
  CheckboxGroup as ElCheckboxGroup,
  Select as ElSelect,
  Option as ElOption,
  Button as ElButton,
  Dialog as ElDialog,
  Card as ElCard,
  Avatar as ElAvatar,
} from 'element-ui';
export default {
  components: {
    ElCard,
    ElForm,
    ElFormItem,
    ElButton,
    ElCollapse,
    ElCollapseItem,
    ElInput,
    ElSwitch,
    ElCheckbox,
    ElCheckboxGroup,
    ElSelect,
    ElOption,
    ElDialog,
    ElAvatar,
  },
  data() {
    return {
      url:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      data: {},
      dialog: false,
      input3: '',
      select: '',
    };
  },
  methods: {
    handleClick() {
      Object.assign(this.$refs.test.initData, { ssss: 22222 });
    },
  },
};
</script>
<style lang="scss">
.umis-avatar__wrapper {
  display: flex;
  .umis-avatar__content {
    margin-left: 15px;
  }
  .umis-avatar__title {
    margin-right: 30px;
    margin-bottom: 3px;
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    color: #606266;
  }
  .umis-avatar__subtitle {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
    font-size: 14px;
  }
  .umis-avatar__description {
    font-size: 13px;
    color: #303133;
    line-height: 1.5;
  }
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
