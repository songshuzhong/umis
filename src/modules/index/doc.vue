<template>
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      color="#0bbd87"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
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
  Timeline as ElTimeline,
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
    ElTimeline,
  },
  data() {
    return {
      activities: [
        {
          content: '前端兼容因时序问题引发的错误',
          timestamp: '2020-12-25 15:43:24',
        },
        {
          content:
            'junmei3计划ID关联的定向模版名称=安踏兴趣人群， 定向设置：年龄-18-35，兴趣关键词-安踏 辛苦排查，计划关联定向模版定向设置失败原因',
          timestamp: '2020-12-23 10:32:43',
        },
        {
          content:
            'xinyu36定向模板信息复用未成功，下发年龄及兴趣关键词都为通投',
          timestamp: '2020-12-22 20:23:44',
        },
        {
          content:
            '召回侧收到的计划详情中兴趣和人群包的字段为空，请BP侧排查一下',
          timestamp: '2020-12-22 20:22:46',
        },
        {
          content:
            'guoshuang3定向预估人群7000人，单天投放曝光量130万，辛苦排查是否异常',
          timestamp: '2020-12-22 19:02:28',
        },
      ],
    };
  },
};
</script>
