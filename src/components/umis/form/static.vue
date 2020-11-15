<template>
  <pre class="umis-component__static"
    >{{ data }}
  </pre>
</template>

<script>
export default {
  name: 'MisStatic',
  props: {
    path: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.umis-component__static {
  display: block;
  padding: 10px;
  margin: 0 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
}
</style>
