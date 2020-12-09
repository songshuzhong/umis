<template>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :inline="true">
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" />
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" />
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model.number="ruleForm.age" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary">提交</el-button>
            <el-button>重置</el-button>
        </el-form-item>
        <el-form-item>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :inline="false">
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" />
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" />
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="ruleForm.age" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">提交</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-form-item>
    </el-form>
</template>
<script>
import {
  Form as ElForm,
  FormItem as ElFormItem,
  Input as ElInput,
  ButtonGroup as ElButtonGroup,
  Button as ElButton,
  Badge as ElBadge,
  Popover as ElPopover
} from 'element-ui';

export default {
  components: {
      ElForm,
      ElFormItem,
      ElInput,
      ElButtonGroup,
      ElButton,
      ElBadge,
      ElPopover
  },
  data() {
    return {
      ruleForm: {}
    }
  }
};
</script>
<style lang="scss">
  .el-alert__content {
    width: 100%;
  }
  .umis-component__not-find {
    width: 100%;
    background-color: white;
    font-size: 14px;
    text-align: left;
    color: #606266;
    overflow-x: scroll;
  }
</style>
