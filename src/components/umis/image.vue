<template>
  <div class="umis-image__container">
    <template v-if="Object.prototype.toString.call(src) === '[object Array]'">
      <el-image
        v-for="(item, index) in src"
        :key="index"
        :src="item"
        :lazy="lazy"
        :fit="fit"
      >
        <template v-if="error" slot="error">
          {{ $getRenderedTpl(error) }}
        </template>
        <template v-if="placeholder" slot="placeholder">
          {{ $getRenderedTpl(placeholder) }}
        </template>
      </el-image>
    </template>
    <template v-else>
      <el-image :src="src" :lazy="lazy" :fit="fit" :preview-src-list="previews">
        <template v-if="error" slot="error">
          {{ $getRenderedTpl(error) }}
        </template>
        <template v-if="placeholder" slot="placeholder">
          {{ $getRenderedTpl(placeholder) }}
        </template>
      </el-image>
    </template>
  </div>
</template>

<script>
import ElImage from 'element-ui/lib/image';

export default {
  name: 'MisImage',
  components: {
    ElImage,
  },
  props: {
    path: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    src: {
      type: [Array, String],
      required: true,
    },
    fit: {
      type: String,
      required: false,
    },
    previews: {
      type: Array,
      required: false,
    },
    lazy: {
      type: Boolean,
      required: false,
      default: false,
    },
    error: {
      type: String,
      required: false,
      default: '<i class="el-icon-picture-outline" />',
    },
    placeholder: {
      type: String,
      required: false,
      default: '加载中...',
    },
  },
};
</script>
<style lang="scss">
.umis-image__container {
  width: 100%;
  height: 100%;
}
</style>
