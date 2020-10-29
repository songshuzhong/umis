<template>
  <fragment>
    <template v-if="Object.prototype.toString.call(src) === '[object Array]'">
      <el-image
        v-for="(item, index) in src"
        :key="index"
        :src="item"
        :lazy="lazy"
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
      <el-image :src="src" :lazy="lazy" :preview-src-list="previews">
        <template v-if="error" slot="error">
          {{ $getRenderedTpl(error) }}
        </template>
        <template v-if="placeholder" slot="placeholder">
          {{ $getRenderedTpl(placeholder) }}
        </template>
      </el-image>
    </template>
  </fragment>
</template>

<script>
import { Image } from 'element-ui';

export default {
  name: 'MisImage',
  components: {
    ElImage: Image,
  },
  props: {
    src: {
      type: [Array, String],
      required: true,
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
