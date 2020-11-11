import clonedeep from 'lodash.clonedeep';

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
  mounted() {
    this.$eventHub.$on('mis-component:linkage', this.handleLinkage);
  },
  methods: {
    onLinkageTrigger(data) {
      if (this.target) {
        const trigerData = data || this.iData;
        this.$eventHub.$emit('mis-component:linkage', this.target, trigerData);
      }
    },
    handleLinkage(target, data) {
      if (this.name && target === this.name) {
        const newData = Object.assign({}, this.iData, data);
        this.iData = clonedeep(newData);
      }
    },
  },
};
