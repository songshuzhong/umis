<template>
  <el-menu
    :mode="mode"
    @select="onMenuSelect"
    :default-active="defaultActive"
    :collapse="collapse"
    :class="classname"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
  >
    <template v-if="title">
      <component v-bind="title" :is="title.renderer" />
    </template>
    <template v-for="(item, index) in body">
      <component
        :is="item.renderer"
        :key="index"
        :index="index.toString()"
        :label="item.label"
        :name="item.name"
        :body="item.body"
        v-bind="item"
      />
    </template>
  </el-menu>
</template>

<script>
import ElMenu from 'element-ui/lib/menu';

export default {
  name: 'MisMenu',
  components: {
    ElMenu,
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
