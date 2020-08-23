<template>
  <el-row v-if="iVisible" :gutter="gutter">
    <el-col v-for="(item, index) in iBody" :span="span" :key="index">
      <el-card :shadow="shadow" :body-style="bodyStyle" :class="classname">
        <template slot="header">
          <div v-html="header || item.header" />
        </template>
        <component
          v-bind="item"
          :is="item.renderer"
          :key="index"
          :label="item.label"
          :name="item.name"
          :children="item.body"
        />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import ElRow from 'element-ui/lib/row'
import ElCol from 'element-ui/lib/col'
import ElCard from 'element-ui/lib/card'

import switches from '~components/umis/switches'

export default {
  name: 'MisCards',
  components: {
    ElRow,
    ElCol,
    ElCard,
  },
  props: {
    body: {
      type: [Array],
      required: false,
    },
    header: {
      type: String,
      required: false,
    },
    initApi: {
      type: [String, Object],
      required: false,
    },
    classname: {
      type: String,
      required: false,
    },
    bodyStyle: {
      type: Object,
      required: false,
    },
    shadow: {
      type: String,
      required: false,
      options: ['always', 'hover', 'never'],
      default: 'always',
    },
    gutter: {
      type: Number,
      required: false,
      default: 0,
    },
    span: {
      type: Number,
      required: false,
      default: 12,
    },
  },
  mixins: [switches],
  data() {
    return {
      iBody: [],
    }
  },
  watch: {
    body: {
      handler(val) {
        this.iBody = val
      },
      immediate: true,
      deep: true,
    },
  },
  computed: {
    isCards() {
      return Object.prototype.toString.call(this.body) === '[object Array]'
    },
  },
  mounted() {
    this.$api
      .slientApi()
      .get(this.initApi)
      .then(res => {
        this.iBody = res.result.list
      })
  },
  methods: {
    getHeader(data) {
      return this.header
    },
  },
}
</script>
