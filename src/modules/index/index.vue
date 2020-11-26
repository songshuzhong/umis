<template>
  <mis-page :schema="schema" :can-schema-update="false" />
</template>
<script>
export default {
  name: 'UmisFactory',
  props: {
    schema: {
      type: [Array, Object],
      required: true,
    },
    canSchemaUpdate: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
