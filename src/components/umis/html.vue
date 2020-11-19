<template>
  <div v-html="getHtml" />
</template>
<script>
import derivedProp from '../mixin/derivedProp';
import initData from '../mixin/initData';

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
  },
  computed: {
    getHtml() {
      return this.$getRenderedTpl(this.html, this.data);
    },
  },
  mixins: [initData, derivedProp],
};
</script>
