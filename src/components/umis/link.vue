<template>
  <el-link
    :type="type"
    :underline="underline"
    :disabled="disabled"
    :href="href"
    :icon="icon"
    @click="onClick"
  >
    <template v-if="text">
      {{ text }}
    </template>
    <template v-if="suffixClass">
      <i :class="suffixClass" />
    </template>
  </el-link>
</template>
<script>
import ElLink from 'element-ui/lib/link';

export default {
  name: 'MisLink',
  components: {
    ElLink,
  },
  props: {
    type: {
      type: String,
      required: false,
      options: ['primary', 'success', 'warning', 'danger', 'info'],
      default: 'default',
    },
    text: {
      type: String,
      required: false,
    },
    underline: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    href: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    suffixClass: {
      type: String,
      required: false,
    },
  },
  methods: {
    onClick() {
      console.log(this);
    },
  },
};
</script>
