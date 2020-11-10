<template>
  <el-tag
    v-for="(item, index) in body"
    :path="`/${path}/${index}`"
    :key="item.name"
    :type="item.type"
    :size="size"
    :closable="closable"
    :hit="hit"
    :color="color"
    :disable-transitions="disableTransitions"
    @click="handleClick"
    @close="handleClose"
  >
    {{ item.name }}
  </el-tag>
</template>

<script>
import ElTag from 'element-ui/lib/tag';

export default {
  name: 'MisTag',
  components: {
    ElTag,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    body: {
      type: Array,
      required: true,
    },
    size: {
      type: String,
      required: false,
    },
    closable: {
      type: Boolean,
      required: false,
    },
    effect: {
      type: String,
      required: false,
    },
    disableTransitions: {
      type: Boolean,
      required: false,
      default: true,
    },
    hit: {
      type: Boolean,
      required: false,
      default: true,
    },
    color: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleClick() {},
    handleClose() {},
  },
};
</script>
