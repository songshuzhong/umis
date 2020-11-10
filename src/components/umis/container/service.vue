<template>
  <div class="umis-service__body" v-if="footer">
    <template v-if="Object.prototype.toString.call(body) === '[object Array]'">
      <mis-component
        v-for="(item, index) in body"
        :path="`${path}/${index}/${item.renderer}`"
        :key="index"
        :mis-name="item.renderer"
        :header="getHeader(item)"
        :body="getBody(item)"
        :footer="getFooter(item)"
        :props="getProps(item, data)"
      />
    </template>
    <mis-component
      v-else
      :path="`${path}/${body.renderer}`"
      :mis-name="body.renderer"
      :header="getHeader(body)"
      :body="getBody(body)"
      :footer="getFooter(body)"
      :props="getProps(body, data)"
    />
  </div>
</template>

<script>
import derivedProp from '../../mixin/derivedProp';
import linkage from '../../mixin/linkage';

export default {
  name: 'MisService',
  props: {
    header: {
      type: [Array, Object],
      required: false,
    },
    body: {
      type: [Array, Object],
      required: false,
    },
    footer: {
      type: [Array, Object],
      required: false,
    },
  },
  mixins: [derivedProp, linkage],
};
</script>
