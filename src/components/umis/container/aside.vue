<template>
  <el-aside :class="classname">
    <template v-if="Object.prototype.toString.call(body) === '[object Array]'">
      <mis-component
        v-for="(item, index) in body"
        :mis-name="item.renderer"
        :key="index"
        :path="`${path}/${index}/${item.renderer}`"
        :props="item"
      />
    </template>
    <mis-component
      v-else
      :mis-name="body.renderer"
      :path="`${path}/${body.renderer}`"
      :props="getFattingProps(body)"
    />
  </el-aside>
</template>

<script>
import ElAside from 'element-ui/lib/aside';

import derivedProp from '../../mixin/derivedProp';

export default {
  name: 'MisAside',
  components: {
    ElAside,
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
    classname: {
      type: String,
      required: false,
    },
  },
  mixins: [derivedProp],
};
</script>
