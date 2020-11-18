<template>
  <el-carousel
    :initial-index="initialIndex"
    :trigger="trigger"
    :autoplay="autoplay"
    :interval="interval"
    :indicator-position="indicatorPosition"
    :arrow="arrow"
    :type="type"
    :loop="loop"
    :direction="direction"
  >
    <el-carousel-item v-for="(item, index) in body" :key="index">
      <mis-component
        :mis-name="item.renderer"
        :path="`${path}/${index}/${item.renderer}`"
        :body="getBody(item)"
        :header="getHeader(item)"
        :footer="getFooter(item)"
        :props="getFattingProps(item)"
        v-bind="getFattingProps(item)"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import ElCarousel from 'element-ui/lib/carousel';
import ElCarouselItem from 'element-ui/lib/carousel-item';

import initApi from '../mixin/initApi';
import initData from '../mixin/initData';
import derivedProp from '../mixin/derivedProp';

export default {
  name: 'MisCarousel',
  components: {
    ElCarousel,
    ElCarouselItem,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    body: {
      type: Array,
      required: true,
    },
    height: {
      type: Number,
      required: false,
      default: 150,
    },
    initialIndex: {
      type: Number,
      required: false,
      default: 0,
    },
    trigger: {
      type: String,
      required: false,
    },
    autoplay: {
      type: Boolean,
      required: false,
    },
    interval: {
      type: Number,
      required: false,
    },
    indicatorPosition: {
      type: String,
      required: false,
      default: 'outside',
    },
    arrow: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    loop: {
      type: Boolean,
      required: false,
    },
    direction: {
      type: String,
      required: false,
    },
  },
  mixins: [initApi, initData, derivedProp],
};
</script>
