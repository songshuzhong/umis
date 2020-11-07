<template>
  <div v-loading="iApiLoading">
    <template v-if="data">
      <mis-component
        v-for="(item, index) in body"
        :mis-name="item.renderer"
        :key="index"
        :path="`${path}/${index}/${item.renderer}`"
        :header="getHeader(item)"
        :body="getBody(item)"
        :footer="getFooter(item)"
        :props="getProps(item, data)"
        v-bind="getProps(item, data)"
      />
    </template>
  </div>
</template>
<script>
import initApi from '../../mixin/initApi';
import derivedProp from '../../mixin/derivedProp';

export default {
  name: 'MisService',
  props: {
    body: {
      type: [Array, Object],
      required: false,
    },
  },
  data() {
    return {
      data: {},
    };
  },
  mixins: [initApi, derivedProp],
};
</script>
