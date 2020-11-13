import clonedeep from 'lodash.clonedeep';

export default {
  data() {
    return {
      data: {},
    };
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
        this.data = clonedeep(newData);
      }
    },
  },
};
