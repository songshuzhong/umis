<template>
  <div v-html="getMapItem"></div>
</template>

<script>
import initData from '../mixin/initData';

export default {
  name: 'MisMapping',
  props: {
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: true,
    },
    map: {
      type: String,
      required: true,
    },
  },
  watch: {
    value: {
      handler(val) {
        this.data.value = val;
      },
    },
  },
  mixins: [initData],
  computed: {
    getMapItem() {
      return this.map[this.data.value];
    },
  },
};
</script>
