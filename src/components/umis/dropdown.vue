<template>
  <el-dropdown>
    <el-button
      :size="size"
      :type="type"
      :plain="plain"
      :round="round"
      :circle="circle"
    >
      {{ text }}
      <i class="el-icon-arrow-down el-icon--right" />
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(item, index) in body"
        :key="index"
        :command="index"
        :disabled="item.disabled"
        :divided="item.divided"
        :icon="item.icon"
      >
        <mis-component
          v-if="actionItems.includes(item.actionType)"
          :path="`/${path}/${index}/${item.renderer}`"
          :mis-name="item.renderer"
          :props="getFattingProps(item, data)"
        />
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import ElDropdown from 'element-ui/lib/dropdown';
import ElDropdownMenu from 'element-ui/lib/dropdown-menu';
import ElDropdownItem from 'element-ui/lib/dropdown-item';

import derivedProp from '../mixin/derivedProp';

const actionItems = ['mis-ajax', 'mis-copy', 'mis-redirect', 'mis-url'];

export default {
  name: 'MisDropdown',
  components: {
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: false,
    },
    body: {
      type: [Array, Object],
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    plain: {
      type: Boolean,
      required: false,
    },
    round: {
      type: Boolean,
      required: false,
    },
    circle: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      actionItems,
    };
  },
  mixins: [derivedProp],
};
</script>
