<template>
  <div>
    <mis-doc />
  </div>
</template>
<script>
import MisDoc from '../../../README.md';

import 'highlight.js/styles/github.css';
import 'github-markdown-css';
export default {
  name: 'MisDoc',
  components: {
    MisDoc,
  },
};
</script>
