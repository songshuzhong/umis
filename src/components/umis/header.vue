<template>
  <el-header :class="classname">
    <template v-for="(item, index) in body">
      <mis-component
        :mis-name="item.renderer"
        :key="index"
        :store="store"
        :title="item.title"
        :header="getHeader(item)"
        :body="getBody(item)"
        :footer="getFooter(item)"
        :props="item"
      />
    </template>
  </el-header>
</template>

<script>
import ElHeader from 'element-ui/lib/header';
import derivedProp from '~components/mixin/derivedProp';
export default {
  name: 'MisHeader',
  components: {
    ElHeader,
  },
  props: {
    body: {
      type: Array,
      required: true,
    },
    classname: {
      type: String,
      required: false,
    },
    store: {
      type: Object,
      required: true,
    },
  },
  mixins: [derivedProp],
};
</script>
