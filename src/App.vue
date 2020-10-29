<template>
  <mis-page :schema="schema" :store="store" :i-schema-update="false" />
</template>
<script>
import schema from './store/frame';

import 'element-theme-chalk/lib/index.css';

export default {
  name: 'UmisFactory',
  data() {
    return {
      schema,
      store: {},
    };
  },
  mounted() {
    this.$eventHub.$on('mis-store:update', this.onStoreUpdate);
  },
  methods: {
    onStoreUpdate(value) {
      for (let key in value) {
        if (value.hasOwnProperty(key)) {
          this.store[key] = value[key];
        }
      }
      this.$eventHub.$emit('mis-store:change', this.store);
    },
  },
};
</script>
