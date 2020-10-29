<template>
  <el-menu-item-group>
    <template v-if="title" slot="title">
      <i v-if="icon" class="el-icon-menu" />
      <span>{{ label }}</span>
    </template>
    <template
      v-for="(item, index) in body"
      :key="index"
    >
      <mis-component
        :mis-name="item.renderer"
        :label="item.label"
        :name="item.name"
        :path="`${path}/${index}/${item.renderer}`"
        :props="item"
        :header="getHeader(item)"
        :body="getBody(item)"
        :footer="getFooter(item)"
      />
    </template>
  </el-menu-item-group>
</template>

<script>
import { MenuItemGroup } from 'element-ui';

import derivedProp from '../mixin/derivedProp';

export default {
  name: 'MisMenuItemGroup',
  components: {
    ElMenuItemGroup: MenuItemGroup,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
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
  mixins: [derivedProp],
};
</script>
