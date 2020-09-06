<template>
  <el-menu-item-group>
    <template v-if="title" slot="title">
      <i v-if="icon" class="el-icon-menu" />
      <span>{{ label }}</span>
    </template>
    <template v-for="(item, index) in body">
      <mis-component
        :mis-name="item.renderer"
        :key="index"
        :label="item.label"
        :name="item.name"
        :props="item"
        :header="getHeader(item)"
        :body="getBody(item)"
        :footer="getFooter(item)"
      />
    </template>
  </el-menu-item-group>
</template>

<script>
import ElMenuItemGroup from 'element-ui/lib/menu-item-group';

import derivedProp from '~components/mixin/derivedProp';

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
  mixins: [derivedProp],
};
</script>
