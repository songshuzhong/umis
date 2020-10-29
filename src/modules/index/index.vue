<template>
  <mis-page :schema="schema" :i-schema-update="false" />
</template>
<script>
import schema from '../../store/frame';

export default {
  name: 'UmisFactory',
  data() {
    return {
      schema,
    };
  },
};
</script>
