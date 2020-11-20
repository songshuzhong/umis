import clonedeep from 'lodash.clonedeep';

export default {
  props: {
    initData: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      data: {},
    };
  },
  watch: {
    initData: {
      handler(val) {
        const mergeData = Object.assign({}, this.data, val);
        this.data = clonedeep(mergeData);
      },
      immediate: true,
      deep: true,
    },
  },
};
