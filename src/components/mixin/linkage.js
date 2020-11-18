import clonedeep from 'lodash.clonedeep';

export default {
  mounted() {
    this.$eventHub.$on('mis-component:linkage', this.handleLinkage);
  },
  methods: {
    onLinkageTrigger(target, data) {
      if (target) {
        const trigerData = data || this.data;
        this.$eventHub.$emit('mis-component:linkage', target, trigerData);
      }
    },
    handleLinkage(target, data) {
      if (this.name && target === this.name) {
        const newData = Object.assign({}, this.data, data);
        this.data = clonedeep(newData);
      }
    },
  },
};
