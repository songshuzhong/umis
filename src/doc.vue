<template>
  <el-radio-group v-model="radio" name="doc" @change="onChange">
    <template v-if="isbutton">
      <el-radio-button v-for="index in options" :key="index" :label="index">
        备选项{{ index }}
      </el-radio-button>
    </template>
    <template v-else>
      <el-radio v-for="index in options" :key="index" :label="index">
        备选项{{ index }}
      </el-radio>
    </template>
  </el-radio-group>
</template>

<script>
export default {
  data() {
    return {
      isbutton: false,
      options: [1, 2, 3, 4],
      radio: 3,
    };
  },
  methods: {
    onChange(val) {
      console.log(val);
    },
  },
};
</script>
