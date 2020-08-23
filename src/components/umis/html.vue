<template>
  <div v-html="getHtml()" />
</template>
<script>
export default {
  name: 'MisHtml',
  props: {
    html: {
      type: String,
      required: false,
    },
    data: {
      type: Object,
      required: false,
    },
  },
  methods: {
    getHtml() {
      return this.$getRenderedTpl(this.html, this.data);
    },
  },
};
</script>
