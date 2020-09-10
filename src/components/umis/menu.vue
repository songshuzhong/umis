<template>
  <el-menu
    :mode="mode"
    @select="onMenuSelect"
    :default-active="defaultActive"
    :collapse="collapse"
    :class="classname"
    :router="router"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
  >
    <template v-if="title">
      <mis-component
        :props="title"
        :mis-name="title.renderer"
        :path="path + title.renderer"
      />
    </template>
    <template v-for="(item, index) in body">
      <mis-component
        :mis-name="item.renderer"
        :key="index"
        :index="index.toString()"
        :path="path + '/' + index + '/' + item.renderer"
        :label="item.label"
        :name="item.name"
        :body="item.body"
        :props="item"
      />
    </template>
  </el-menu>
</template>

<script>
import { Menu } from 'element-ui';

export default {
  name: 'MisMenu',
  components: {
    ElMenu: Menu,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: [Object, String],
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
    mode: {
      type: String,
      required: false,
      default: 'horizontal',
    },
    defaultActive: {
      type: String,
      required: false,
    },
    router: {
      type: Boolean,
      required: false,
      default: false,
    },
    collapse: {
      type: Boolean,
      required: false,
      default: false,
    },
    store: {
      type: Object,
      required: false,
    },
    body: {
      type: Array,
      required: true,
    },
    classname: {
      type: String,
      required: false,
    },
    backgroundColor: {
      type: String,
      required: false,
    },
    textColor: {
      type: String,
      required: false,
    },
    activeTextColor: {
      type: String,
      required: false,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.onMenuSelect(this.defaultActive);
    });
  },
  methods: {
    onMenuSelect(index) {
      const store = this.store;
      store[this.name] = index;
      this.$eventHub.$emit('mis-store:change', store);
    },
  },
};
</script>
