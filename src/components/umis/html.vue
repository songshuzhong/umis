<template>
  <div v-html="getHtml" />
</template>
<script>
import derivedProp from '../mixin/derivedProp';
import linkage from '../mixin/linkage';

export default {
  name: 'MisHtml',
  props: {
    html: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    data: {
      type: Object,
      required: false,
      default: {},
    },
  },
  data() {
    return {
      iData: {},
    };
  },
  computed: {
    getHtml() {
      return this.$getRenderedTpl(this.html, this.iData);
    },
  },
  watch: {
    data: {
      handler(val) {
        this.iData = val;
      },
      immediate: true,
    },
  },
  mixins: [derivedProp, linkage],
};
</script>
