<template>
  <el-divider :direction="direction" :content-position="contentPosition">
    <i v-if="icon" :class="icon" />
    <template v-else>
      {{ text }}
    </template>
  </el-divider>
</template>

<script>
import ElDivider from 'element-ui/lib/divider';

export default {
  name: 'MisDivider',
  components: {
    ElDivider,
  },
  props: {
    path: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    direction: {
      type: String,
      required: false,
    },
    contentPosition: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
  },
};
</script>
