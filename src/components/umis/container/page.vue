<template>
  <div class="umis-page" v-loading="iApiLoading || iSchemaLoading">
    <template
      v-if="Object.prototype.toString.call(iSchema) === '[object Array]'"
    >
      <component
        v-for="(item, index) in iSchema"
        v-bind="item"
        :key="index"
        :is="item.renderer"
        :path="`${path}/${index}/${item.renderer}`"
      />
    </template>
    <template
      v-if="Object.prototype.toString.call(iSchema) === '[object Object]'"
    >
      <component
        v-bind="iSchema"
        :is="iSchema.renderer"
        :key="iSchema.name"
        :path="`${path}/${iSchema.renderer}`"
      />
    </template>
  </div>
</template>
<script>
import initApi from '../../mixin/initApi';
import initData from '../../mixin/initData';

export default {
  name: 'MisPage',
  props: {
    path: {
      type: String,
      required: true,
      default: 'page',
    },
    schema: {
      type: [Array, Object],
      required: false,
    },
  },
  mixins: [initApi, initData],
  watch: {
    schema: {
      handler(val) {
        this.iSchema = val;
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss">
.umis-page {
  width: 100%;
  height: 100%;
}
</style>
