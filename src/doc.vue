<template>
  <div class="umis-list__container">
    <el-checkbox-group v-model="checkList">
      <template v-for="(item, index) in options" :key="index">
        <div class="umis-list__item">
          <el-checkbox :label="item.text" />
          <el-card>
            sadfasdf
          </el-card>
        </div>
      </template>
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          text: '第一个',
          value: '1',
        },
        {
          text: '第二个',
          value: '2',
        },
        {
          text: '第三个',
          value: '3',
        },
      ],
      checkList: [],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handleClick(e) {
      const value = e.target.dataset.value;
      this.checkList = [...new Set([...this.checkList, value])];
    },
  },
};
</script>
