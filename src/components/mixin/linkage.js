import clonedeep from 'lodash.clonedeep';

export default {
  data() {
    return {
      iData: {},
    };
  },
  mounted() {
    this.$eventHub.$on('mis-component:linkage', this.handleLinkage);
  },
  methods: {
    onLinkageTrigger(target, data) {
      if (target) {
        const trigerData = data || this.iData;
        this.$eventHub.$emit('mis-component:linkage', target, trigerData);
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
