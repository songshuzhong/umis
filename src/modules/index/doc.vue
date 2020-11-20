<template>
  <el-card>
    <div v-html="`<i class='el-icon-s-promotion'></i>`" />
    <el-slider v-model="value" />
    {{ res }}
  </el-card>
</template>

<script>
import ElCard from 'element-ui/lib/card';
import ElSlider from 'element-ui/lib/slider';

import Queue from './queue';

export default {
  components: {
    ElCard,
    ElSlider,
  },
  data() {
    return {
      res: '',
      value: 0,
      taskList: [],
    };
  },
  watch: {
    value: {
      handler(val) {
        this.handleValueChange(val);
      },
    },
  },
  mounted() {
    this.queue = new Queue();
  },
  methods: {
    handleValueChange(val) {
      const task = () => {
        this.$api
          .slientApi()
          .get('/api/card/123456')
          .then(res => {
            console.log(val, res);
          });
      };
      this.queue.add(task);
    },
  },
};
</script>
