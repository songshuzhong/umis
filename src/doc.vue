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
        return {
          code: '100000',
          msg: '\u83b7\u53d6\u6210\u529f',
          data: {
            fanstop: { expand: 1, buy: 1, sort: 1, count: 263, hidden: 0 },
            designate: { expand: 0, buy: 0, sort: 4, count: 200, hidden: 0 },
            context: {
              expand: 0,
              buy: 0,
              sort: 5,
              count: 385,
              hidden: 0,
              feature: { product: { new_icon: '0' }, user: { wizard: '0' } },
            },
            smartpick: {
              expand: 0,
              buy: 1,
              sort: 2,
              count: 385,
              hidden: 0,
              feature: { product: { new_icon: '0' }, user: { wizard: '0' } },
            },
            customize: {
              expand: 0,
              buy: 0,
              sort: 8,
              hidden: 0,
              modules: {
                trade: { expand: 0, buy: 0, sort: 6, count: 427, hidden: 0 },
                cbd: { expand: 0, buy: 0, sort: 7, count: 860, hidden: 0 },
              },
            },
          },
        };
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
