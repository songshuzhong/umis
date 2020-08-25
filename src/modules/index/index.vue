<template>
  <div class="mis">
    <component
      v-for="(item, index) in schema"
      v-bind="item"
      :key="index"
      :is="item.renderer"
      :store="store"
      :visibleOn="item.visibleOn"
      :disabledOn="item.disabledOn"
      @input="onInput"
    />
  </div>
</template>
<script>
import schema from '../../store/schema';

import 'element-theme-chalk/lib/index.css';

export default {
  name: 'UMIS',
  data() {
    return {
      schema,
      store: {},
    };
  },
  mounted() {
    window.UMIS = { schema };
    this.$eventHub.$on('mis-schema:change', this.upSchema);
    this.$eventHub.$on('mis-store:update', this.onStoreUpdate);
  },
  methods: {
    onInput(value) {
      console.log(value);
    },
    onStoreUpdate(value) {
      for (let key in value) {
        if (value.hasOwnProperty(key)) {
          this.store[key] = value[key];
        }
      }
      this.$eventHub.$emit('mis-store:change', this.store);
    },
    upSchema(data) {
      this.schema = data;
    },
  },
};
</script>
