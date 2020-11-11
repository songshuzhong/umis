<template>
  <el-timeline :reverse="iData.reverse">
    <el-timeline-item
      v-for="(item, index) in iList"
      :key="index"
      :timestamp="item.timestamp"
      :placement="item.placement || placement"
      :type="item.type || type"
      :color="item.color || color"
      :size="item.size || size"
      :icon="item.icon || icon"
    >
      <mis-component
        :mis-name="body.renderer"
        :path="`${path}/${index}/${body.renderer}`"
        :body="getBody(body, item)"
      />
    </el-timeline-item>
  </el-timeline>
</template>

<script>
import ElTimeline from 'element-ui/lib/timeline';
import ElTimelineItem from 'element-ui/lib/timeline-item';

import initApi from '../mixin/initApi';
import derivedProp from '../mixin/derivedProp';
import linkage from '../mixin/linkage';

export default {
  name: 'MisTimeline',
  components: {
    ElTimeline,
    ElTimelineItem,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placement: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    body: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      iData: {
        reverse: false,
      },
    };
  },
  mixins: [initApi, linkage, derivedProp],
};
</script>
