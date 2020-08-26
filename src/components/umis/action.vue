<template>
  <fragment>
    <component
      :is="actionType"
      :body="getProps($props, data)"
      v-if="actionType"
      v-bind="getBody($props)"
    />
    <el-button v-else>{{text}}</el-button>
  </fragment>
</template>
<script>
import ElButton from 'element-ui/lib/button';

import derivedProp from '~components/mixin/derivedProp';

export default {
  name: 'MisAction',
  components: {
    ElButton,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    actionType: {
      type: String,
      required: true,
    },
    renderer: {
      type: String,
      required: true,
    },
    classname: {
      type: String,
      required: false,
    },
    data: {
      type: Object,
      required: false,
    },
    body: {
      type: [Array, Object],
      required: false,
    },
  },
  mixins: [derivedProp],
  mounted() {
    console.log(this.text, this.actionType)
  },
  methods: {
    onClick() {
      this.action && this.action();
      this.afterAction && this.afterAction();
    },
  },
};
</script>
