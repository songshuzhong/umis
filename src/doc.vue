<template>
  <div>
    <div>doc: {{ test }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: '',
    };
  },
  watch: {
    test: {
      handler(val) {
        console.log(val);
      },
    },
  },
};
</script>
