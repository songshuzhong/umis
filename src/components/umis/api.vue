<template>
  <div>
    <el-radio-group v-model="checked" class="umis-form-combo">
      <div v-for="(value, key) in domains" class="umis-form-combo__item">
        <el-link
          :underline="false"
          class="umis-form-combo__delete"
          icon="el-icon-delete"
          @click="onDelete(key)"
        />
        <el-input class="umis-form-combo__label" :key="key" v-model="key" />
        <el-input
          class="umis-form-combo__value"
          :key="key"
          placeholder="请输入域名"
          v-model="domains[key]"
        />
        <el-radio class="umis-form-combo__radio" :label="key" :key="key">{{
          ''
        }}</el-radio>
      </div>
    </el-radio-group>
    <div class="umis-form-combo__footer">
      <el-button class="umis-form-combo__save" @click="onAdd">添加</el-button>
      <el-button class="umis-form-combo__save" @click="onSave">应用</el-button>
    </div>
  </div>
</template>
<script>
import { RadioGroup, Radio, Button, Link, Input } from 'element-ui';
import api from '~utils/api';

const apisMap = Object.keys(api.GLOBAL_DOMAINS).reduce((total, item) => {
  if (item !== 'activeDomain' && item !== 'isApiChanged') {
    total[item] = api.GLOBAL_DOMAINS[item];
  }
  return total;
}, {});

export default {
  name: 'MisDomain',
  components: {
    ElRadioGroup: RadioGroup,
    ElRadio: Radio,
    ElButton: Button,
    ElLink: Link,
    ElInput: Input,
  },
  data() {
    return {
      domains: apisMap,
      checked: '',
    };
  },
  methods: {
    onAdd() {
      const length = Object.keys(this.domains).length;
      const domains = JSON.parse(JSON.stringify(this.domains));
      domains[`VUE_APP_API_BASE${length}`] = '';
      this.domains = domains;
    },
    onDelete(key) {
      if (this.checked === key) {
        this.$notice({
          type: 'error',
          title: '错误',
          message: '该前缀在使用中！！',
        });
        return;
      }
      const domains = JSON.parse(JSON.stringify(this.domains));
      delete domains[key];
      this.domains = domains;
    },
    onSave() {
      this.$notice({
        type: 'success',
        title: '通知',
        message: '保存成功！',
      });
      api.GLOBAL_DOMAINS.activeDomain = this.domains[this.checked];
      api.GLOBAL_DOMAINS.isApiChanged = true;
    },
  },
};
</script>
<style lang="scss">
.umis-form-combo {
  width: 100%;
}
.umis-form-combo__item {
  display: flex;
  margin-top: 10px;
}
.umis-form-combo__delete {
  margin: 0 10px;
}
.umis-form-combo__label,
.umis-form-combo__value {
  padding: 0 12px 0 0;
}
.umis-form-combo__radio {
  display: flex;
  align-items: center;
}
.umis-form-combo__footer {
  display: flex;
  margin-top: 20px;
  padding: 0 35px;
}
.umis-form-combo__save {
  display: block;
}
</style>
