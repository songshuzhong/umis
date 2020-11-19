export default {
  props: {
    hiddenOn: {
      type: String,
      required: false,
    },
    visibleOn: {
      type: String,
      required: false,
    },
    disabledOn: {
      type: String,
      required: false,
    },
    transition: {
      type: String,
      required: false,
      default: 'el-fade-in-linear',
    },
  },
  data() {
    return {
      data: {},
    };
  },
  computed: {
    iHidden() {
      if (this.hiddenOn) {
        return !this.$onExpressionEval(this.hiddenOn, this.data);
      }
      return true;
    },
    iVisible() {
      if (this.visibleOn) {
        return this.$onExpressionEval(this.visibleOn, this.data);
      }
      return true;
    },
    iDisabled() {
      if (this.disabledOn) {
        return this.$onExpressionEval(this.disabledOn, this.data);
      }
      return false;
    },
  },
};
