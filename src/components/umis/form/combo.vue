<template>
  <div>
    <template v-if="multiple">
      <div
        v-for="(item, index) in iValue"
        :key="index"
        class="umis-form-combo__item"
      >
        <mis-field
          v-for="(value, name, key) in item"
          :key="`${path}/${index}/${name}`"
          :name="name"
          v-model="iValue[index][name]"
          :field="getFieldByKey(key, index)"
          :path="`${path}/${index}/${name}`"
        />
        <el-link
          class="umis-form-combo__delete"
          icon="el-icon-delete"
          @click="onDelete(index)"
        />
      </div>
      <el-form-item :label="' '" class="umis-form-combo__plus">
        <el-button icon="el-icon-plus" @click="onAdd" />
      </el-form-item>
    </template>
    <template v-else>
      <div
        v-for="(item, index) in controls"
        :key="index"
        class="umis-form-combo__item"
      >
        <mis-field
          :underline="false"
          v-model="iValue[item.name]"
          :name="item.name"
          :field="getField(item)"
          :path="`${path}/${index}/${item.renderer}`"
        />
      </div>
    </template>
  </div>
</template>
<script>
import clonedeep from 'lodash.clonedeep';
import ElButton from 'element-ui/lib/button';
import ElLink from 'element-ui/lib/link';
import ElFormItem from 'element-ui/lib/form-item';
import linkage from '../../mixin/linkage';

export default {
  name: 'MisCombo',
  components: {
    ElFormItem,
    ElLink,
    ElButton,
  },
  props: {
    controls: {
      type: Array,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [Array, Object],
      required: false,
      default: {},
    },
    data: {
      type: [Array, Object],
      required: false,
      default: {},
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      iValue: '',
    };
  },
  watch: {
    value: {
      handler(val) {
        this.iValue = val;
      },
      immediate: true,
    },
    iValue: {
      handler(val) {
        this.$emit('input', val);
      },
      deep: true,
    },
  },
  mixins: [linkage],
  methods: {
    getField(item) {
      const field = clonedeep(item);
      field.prop = `${this.name}.${field.name}`;

      return field;
    },
    getFieldByKey(key, index) {
      const field = clonedeep(this.controls[key]);
      field.prop = `${this.name}[${index}].${field.name}`;
      return field;
    },
    onAdd() {
      const keyMap = this.controls.reduce((total, control) => {
        total[control.name] = '';
        return total;
      }, {});
      this.iValue.push(keyMap);
    },
    onDelete(index) {
      this.iValue.splice(index, 1);
    },
  },
};
</script>
