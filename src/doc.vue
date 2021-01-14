<template>
  <pre ref="pre">{{ tableData }}</pre>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: false,
      default: function() {
        return [
          {
            date: '2016-05-02',
            name: '王小虎222',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ];
      },
    },
  },
  data() {
    return {
      tableData: '',
      search: '',
    };
  },
  watch: {
    value: {
      handler(val) {
        this.tableData = val;
      },
      immediate: true,
    },
  },
  mounted() {
    console.log(this.$refs.pre);
  },
};
</script>
