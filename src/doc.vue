<template>
  <div class="umis-demo__affix">
    <div class="umis-demo__affix__div"></div>
    <div class="affix-container">
      <el-affix target=".affix-container">
        <el-button type="primary">指定容器1</el-button>
      </el-affix>
    </div>
    <div class="affix-container1">
      <el-affix target=".affix-container1">
        <el-button type="primary">指定容器1222</el-button>
      </el-affix>
    </div>
    <div class="umis-demo__affix__div"></div>
  </div>
</template>
<script>
import { ElAffix, ElButton } from 'element-plus';
export default {
  components: {
    ElAffix,
    ElButton,
  },
};
</script>
<style lang="scss">
.umis-demo__affix__div {
  height: 700px;
}
.affix-container {
  position: relative;
  height: 500px;
  border-radius: 4px;
  background: #ecf5ff;
}
.affix-container1 {
  height: 500px;
  border-radius: 4px;
  background: #f0c78a;
}
</style>
