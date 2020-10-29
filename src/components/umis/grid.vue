<template>
  <el-row
    :gutter="gutter"
    :type="type"
    :justify="justify"
    :align="align"
    :tag="tag"
  >
    <el-col
      v-for="(item, index) in body"
      :span="item.span"
      :key="index"
      :class="classname"
    >
      <mis-component
        :props="item"
        :mis-name="item.renderer"
        :key="index"
        :path="`${path}/${index}/${item.renderer}`"
        :label="item.label"
        :name="item.name"
        :body="item.body"
      />
    </el-col>
  </el-row>
</template>
<script>
import { Row, Col } from 'element-ui';

export default {
  name: 'MisGrid',
  components: {
    ElRow: Row,
    ElCol: Col,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    body: {
      type: [Array, Object],
      required: false,
    },
    classname: {
      type: String,
      required: false,
    },
    gutter: {
      type: Number,
      required: false,
      default: 0,
    },
    type: {
      type: String,
      required: false,
    },
    justify: {
      type: String,
      required: false,
      options: ['start', 'end', 'center', 'space-around', 'space-between'],
      default: 'start',
    },
    align: {
      type: String,
      required: false,
      options: ['top', 'middle', 'bottom'],
      default: 'top',
    },
    tag: {
      type: String,
      required: false,
      default: 'div',
    },
  },
};
</script>
