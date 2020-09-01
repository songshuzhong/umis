<template>
  <el-menu-item-group>
    <template v-if="title" slot="title">
      <i v-if="icon" class="el-icon-menu" />
      <span>{{ label }}</span>
    </template>
    <template v-for="(item, index) in body">
      <component
        :is="item.renderer"
        :key="index"
        :label="item.label"
        :name="item.name"
        :body="item"
      />
    </template>
  </el-menu-item-group>
</template>

<script>
import ElMenuItemGroup from 'element-ui/lib/menu-item-group';

export default {
  name: 'MisMenuItemGroup',
  components: {
    ElMenuItemGroup,
  },
  props: {
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    body: {
      type: [Array, Object],
      required: true,
    },
  },
};
</script>
