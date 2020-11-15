<template>
  <div class="umis-service__body">
    <template v-if="Object.prototype.toString.call(body) === '[object Array]'">
      <template v-for="(item, index) in body">
        <mis-component
          :path="`${path}/${index}/${item.renderer}`"
          :key="index"
          :mis-name="item.renderer"
          :header="getHeader(item)"
          :body="getBody(item)"
          :footer="getFooter(item)"
          :props="getFattingProps(item, data)"
        />
      </template>
    </template>
    <mis-component
      v-else
      v-bind="body"
      :path="`${path}/${body.renderer}`"
      :mis-name="body.renderer"
      :header="getHeader(body)"
      :body="getBody(body)"
      :footer="getFooter(body)"
      :props="getFattingProps(body, data, { rows })"
    />
  </div>
</template>

<script>
import derivedProp from '../../mixin/derivedProp';
import initApi from '../../mixin/initApi';

export default {
  name: 'MisService',
  props: {
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    data: {
      type: Object,
      required: true,
    },
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
  mixins: [initApi, derivedProp],
};
</script>
